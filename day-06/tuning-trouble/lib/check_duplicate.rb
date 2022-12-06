def check_duplicate(recent_four)
  dup = false
  length = recent_four.length
  for i in 0..(length - 2) do
    for j in i+1..(length - 1) do
      if recent_four[i] == recent_four[j]
        dup = true
      end
    end
  end
  return dup
end