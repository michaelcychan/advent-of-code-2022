def get_points(character)
  point = character.ord
  if point >= 97 && point <= 122
    point = point - 96
  elsif point >= 65 && point <=90
    point = point - 38
  end

  point
end