def divide_half(rucksack)
  first_half = rucksack[0..(rucksack.length / 2 -1)]
  second_half = rucksack[(rucksack.length / 2 )..rucksack.length]
  return [first_half, second_half]
end