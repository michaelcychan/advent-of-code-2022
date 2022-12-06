require_relative 'tuning'
require_relative 'read_signal'

signal = read_signal()
first_marker = tuning(4, signal)
puts "The first marker is #{first_marker}"

first_message = tuning(14, signal)
puts "The first marker for message is #{first_message}"