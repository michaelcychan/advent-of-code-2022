require_relative 'check_duplicate'

def tuning(distinct, signal)
  recent_list = get_first_X(distinct, signal)
  for i in distinct..(signal.length - 1) do
    if check_duplicate(recent_list)
      recent_list.shift()
      recent_list.push(signal[i])
    else
      return i
    end
  end
  return 0
end


def get_first_X(distinct, signal)
  output = []
  for i in 0..(distinct-1) do
    output.push(signal[i])
  end
  return output
end

