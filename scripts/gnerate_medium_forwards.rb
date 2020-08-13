require 'httparty'

class Medium
  def self.posts(username:, limit:)
    get_posts(username, limit).each do |post|
      post[:published_at_as_date] = Date.strptime((post[:published_at].to_f / 1000).to_s, '%s')
    end
  end

  class << self
    private

    def get_posts(username, limit)
      posts = []
      response = JSON.parse(call_api(username, 'latest', limit))
      response['payload']['references']['Post'].each do |id, value|
        posts <<  {
          id: id,
          title: value['title'],
          url: "https://medium.com/@#{username}/" + value['uniqueSlug'],
          published_at: value['firstPublishedAt'],
          slug: value['slug']
        }
      end
      posts
    end

    def call_api(username, path, limit)
      response = HTTParty.get("https://medium.com/@#{username}/#{path}?limit=#{limit}", headers: { 'Accept': 'application/json' })
      response.body[16..-1] # Strips weird characters Medium add on
    end
  end
end

posts = Medium.posts(username: 'dannysmith', limit: 200)
posts.each do |post|
  string = '---'
  string += "\ntitle: #{post[:title]}"
  string += "\nredurect_to: '#{post[:url]}'"
  string += "\nplatform: medium"
  string += "\n---\n"

  filename = post[:published_at_as_date].to_s + '-' + post[:slug]

  File.open("../_posts/#{filename}.md, 'w') {|f| f.write(string) }
end
