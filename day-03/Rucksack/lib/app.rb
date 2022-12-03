require_relative 'divide_half'
require_relative 'find_wrong'
require_relative 'get_points'
require_relative 'read_rucksack'


total_point = 0
rucksack = read_rucksack

for i in 0..(rucksack.length-1) do
  two_halves = divide_half(rucksack[i])
  wrong = find_wrong(two_halves)
  point = get_points(wrong)
  total_point += point
end

puts "The total point is #{total_point}."
