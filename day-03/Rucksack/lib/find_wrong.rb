def find_wrong(input_arr)
  first = {}
  for i in 0..input_arr[0].length do
    if first[input_arr[0][i]] == nil
      first[input_arr[0][i]] = true
    end
  end
  
  for j in 0..input_arr[1].length do
    if first[input_arr[1][j]] == true
      return input_arr[1][j]
    end
  end
  
end