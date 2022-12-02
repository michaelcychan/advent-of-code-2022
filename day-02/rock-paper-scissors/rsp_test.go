package main

import "testing"

func TestCalculatePoint(t *testing.T) {
	t.Run("returns 8 for using a Paper Y to win a Rock A", func(t *testing.T) {
		input := "A Y"
		expected := 8
		actual := calculatePoint(input)

		assertPoint(t, expected, actual)
	})
	t.Run("returns 1 for using rock X to lose a paper B", func(t *testing.T) {
		input := "B X"
		expected := 1
		actual := calculatePoint(input)

		assertPoint(t, expected, actual)
	})
	t.Run("returns 6 for using scissors Z to draw a scissors C", func(t *testing.T) {
		input := "C Z"
		expected := 6
		actual := calculatePoint(input)

		assertPoint(t, expected, actual)
	})
}

func TestCalculateNewPoint(t *testing.T) {
	t.Run("returns 4 for needing to draw Y when oppo gets rock A", func(t *testing.T) {
		input := "A Y"
		expected := 4
		actual := calculateNewPoint(input)

		assertPoint(t, expected, actual)
	})
	t.Run("returns 1 for needing to lose X when oppo gets paper B", func(t *testing.T) {
		input := "B X"
		expected := 1
		actual := calculateNewPoint(input)

		assertPoint(t, expected, actual)
	})
	t.Run("returns 7 for needing to win Z when oppo gets scissors C", func(t *testing.T) {
		input := "C Z"
		expected := 7
		actual := calculateNewPoint(input)

		assertPoint(t, expected, actual)
	})
}

func assertPoint(t testing.TB, expected, actual int) {
	t.Helper()
	if expected != actual {
		t.Errorf("expected %d, but got %d", expected, actual)
	}
}
