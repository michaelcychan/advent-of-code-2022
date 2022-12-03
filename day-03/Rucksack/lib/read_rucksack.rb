def read_rucksack
  puts Dir.pwd

  file = File.open('./lib/rucksack.txt')

  file_data = file.readlines.map(&:chomp)

  return file_data
end