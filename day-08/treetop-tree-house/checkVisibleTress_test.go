package main

import (
	"reflect"
	"strconv"
	"strings"
	"testing"
)

func TestGetTrees(t *testing.T) {
	t.Run("able to get tree config", func(t *testing.T) {
		firstLine := strings.Split("003112220410413101104044022234320204233341435252223642044225451531421012104343030211442433410302111", "")

		var expectedNumSlice []int
		for _, x := range firstLine {
			eachInt, err := strconv.Atoi(x)
			if err == nil {
				expectedNumSlice = append(expectedNumSlice, eachInt)
			} else {
				t.Errorf("Error: %v \n", err)
			}
		}

		expectedNumLines := 99
		got := getTrees()
		gotNumLines := len(got)
		gotFirstLine := got[0]

		if expectedNumLines != gotNumLines {
			t.Errorf("Expected %d lines, but got %d lines", expectedNumLines, gotNumLines)
		}

		if !reflect.DeepEqual(gotFirstLine, expectedNumSlice) {
			t.Errorf("Expected %v, but got %v", expectedNumSlice, gotFirstLine)
		}
	})
}

func TestIsVisibleInside(t *testing.T) {
	t.Run("returns true if inside tree is visible", func(t *testing.T) {
		treeConfig := [][]int{{0, 0, 0}, {0, 9, 0}, {0, 0, 0}}
		row := 1
		column := 1

		expected := true
		got := isVisibleInside(treeConfig, row, column)

		if expected != got {
			t.Errorf("expected %v, but got %v", expected, got)
		}
	})
	t.Run("returns false if inside tree is invisible", func(t *testing.T) {
		treeConfig := [][]int{{8, 8, 8}, {8, 5, 8}, {8, 8, 8}}
		row := 1
		column := 1

		expected := false
		got := isVisibleInside(treeConfig, row, column)

		if expected != got {
			t.Errorf("expected %v, but got %v", expected, got)
		}
	})
	t.Run("returns true if inside tree is visible from one direction", func(t *testing.T) {
		treeConfig := [][]int{{8, 8, 8}, {8, 5, 8}, {8, 0, 8}}
		row := 1
		column := 1

		expected := true
		got := isVisibleInside(treeConfig, row, column)

		if expected != got {
			t.Errorf("expected %v, but got %v", expected, got)
		}
	})
}

func TestFindScenicScore(t *testing.T) {
	t.Run("gets the scenic score", func(t *testing.T) {
		treeConfig := [][]int{{3, 0, 3, 7, 3}, {2, 5, 5, 1, 2}, {6, 5, 3, 3, 2}, {3, 3, 5, 4, 9}, {3, 5, 3, 9, 0}}
		row := 1
		column := 2

		expected := 4
		got := findScenicScore(treeConfig, row, column)

		if expected != got {
			t.Errorf("expected scenic score: %d, but got %d \n", expected, got)
		}
	})
	t.Run("gets the scenic score (second case)", func(t *testing.T) {
		treeConfig := [][]int{{3, 0, 3, 7, 3}, {2, 5, 5, 1, 2}, {6, 5, 3, 3, 2}, {3, 3, 5, 4, 9}, {3, 5, 3, 9, 0}}
		row := 3
		column := 2

		expected := 8
		got := findScenicScore(treeConfig, row, column)

		if expected != got {
			t.Errorf("expected scenic score: %d, but got %d \n", expected, got)
		}
	})
}
