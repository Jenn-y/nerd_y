10.times do |post| 
  Post.create(
    title: "Post#{post}",
    description: "Here is the post description"
  )
end

puts "10 posts created"