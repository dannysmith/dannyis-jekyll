# frozen_string_literal: true

# This hook replaces markdown image links with the responsive_pnage partial, which is used by the jekyll-responsive-images plugin.
# This saves us having to manually write {% responsive_image path: assets/my-file.jpg %} in our markdown files.

# Jekyll::Hooks.register [:pages, :posts], :pre_render do |post, _payload|
#   docExt = post.extname.tr('.', '')
#   post.content = post.content.gsub(/!\[(.*)\]\(([^\)]+)\)(?:{:([^}]+)})*/, '{% responsive_image path: \2 alt: "\1" %}{:.image \3}')
#   post.content = post.content.gsub 'path: /', 'path: ' # you can probably optimise this a bit
# end
