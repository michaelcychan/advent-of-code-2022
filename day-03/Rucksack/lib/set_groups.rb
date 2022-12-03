def set_groups(rucksacks)
  grouped = []

  index = 0
  while index < rucksacks.length do
    small_group = []
    small_group.push(rucksacks[index], rucksacks[index + 1], rucksacks[index + 2])

    index += 3
    grouped.push(small_group)
  end
  grouped
end