require_relative 'divide_half'
require_relative 'find_wrong'
require_relative 'get_points'
require_relative 'read_rucksack'
require_relative 'find_team_common'
require_relative 'set_groups'


total_point = 0
rucksack = read_rucksack

for i in 0..(rucksack.length-1) do
  two_halves = divide_half(rucksack[i])
  wrong = find_wrong(two_halves)
  point = get_points(wrong)
  total_point += point
end

puts "The total point for each single rucksack is #{total_point}."

team_total = 0

teams = set_groups(rucksack)
puts "the number of teams is #{teams.length}"
for j in 0..(teams.length-1) do
  team_common = find_team_common(teams[j])
  team_point = get_points(team_common)
  team_total += team_point
end
puts "The total point for the teams is #{team_total}."