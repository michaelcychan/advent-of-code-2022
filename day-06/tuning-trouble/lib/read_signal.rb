def read_signal
  file = File.open('./lib/signal.txt')
  file_data = file.readlines.map(&:chomp)
  return file_data[0]
end