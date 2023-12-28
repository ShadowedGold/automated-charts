var odds = [
  "certain",
  "nearlyCertain",
  "veryLikely",
  "likely",
  "50/50",
  "unlikely",
  "veryUnlikely",
  "nearlyImpossible",
  "impossible"
]

var fateChart = {
  1: {
    "certain":            [10,  50,  91],
    "nearlyCertain":      [ 7,  35,  88],
    "veryLikely":         [ 5,  25,  86],
    "likely":             [ 3,  15,  84],
    "50/50":              [ 2,  10,  83],
    "unlikely":           [ 1,   5,  82],
    "veryUnlikely":       [ 0,   1,  81],
    "nearlyImpossible":   [ 0,   1,  81],
    "impossible":         [ 0,   1,  81]
  },
  2: {
    "certain":            [13,  65,  94],
    "nearlyCertain":      [10,  50,  91],
    "veryLikely":         [ 7,  35,  88],
    "likely":             [ 5,  25,  86],
    "50/50":              [ 3,  15,  84],
    "unlikely":           [ 2,  10,  83],
    "veryUnlikely":       [ 1,   5,  82],
    "nearlyImpossible":   [ 0,   1,  81],
    "impossible":         [ 0,   1,  81]
  },
  3: {
    "certain":            [15,  75,  96],
    "nearlyCertain":      [13,  65,  94],
    "veryLikely":         [10,  50,  91],
    "likely":             [ 7,  35,  88],
    "50/50":              [ 5,  25,  86],
    "unlikely":           [ 3,  15,  84],
    "veryUnlikely":       [ 2,  10,  83],
    "nearlyImpossible":   [ 1,   5,  82],
    "impossible":         [ 0,   1,  81]
  },
  4: {
    "certain":            [17,  85,  98],
    "nearlyCertain":      [15,  75,  96],
    "veryLikely":         [13,  65,  94],
    "likely":             [10,  50,  91],
    "50/50":              [ 7,  35,  88],
    "unlikely":           [ 5,  25,  86],
    "veryUnlikely":       [ 3,  15,  84],
    "nearlyImpossible":   [ 2,  10,  83],
    "impossible":         [ 1,   5,  82]
  },
  5: {
    "certain":            [18,  90,  99],
    "nearlyCertain":      [17,  85,  98],
    "veryLikely":         [15,  75,  96],
    "likely":             [13,  65,  94],
    "50/50":              [10,  50,  91],
    "unlikely":           [ 7,  35,  88],
    "veryUnlikely":       [ 5,  25,  86],
    "nearlyImpossible":   [ 3,  15,  84],
    "impossible":         [ 2,  10,  83]
  },
  6: {
    "certain":            [19,  95, 100],
    "nearlyCertain":      [18,  90,  99],
    "veryLikely":         [17,  85,  98],
    "likely":             [15,  75,  96],
    "50/50":              [13,  65,  94],
    "unlikely":           [10,  50,  91],
    "veryUnlikely":       [ 7,  35,  88],
    "nearlyImpossible":   [ 5,  25,  86],
    "impossible":         [ 3,  15,  84]
  },
  7: {
    "certain":            [20,  99, 101],
    "nearlyCertain":      [19,  95, 100],
    "veryLikely":         [18,  90,  99],
    "likely":             [17,  85,  98],
    "50/50":              [15,  75,  96],
    "unlikely":           [13,  65,  94],
    "veryUnlikely":       [10,  50,  91],
    "nearlyImpossible":   [ 7,  35,  88],
    "impossible":         [ 5,  25,  86]
  },
  8: {
    "certain":            [20,  99, 101],
    "nearlyCertain":      [20,  99, 101],
    "veryLikely":         [19,  95, 100],
    "likely":             [18,  90,  99],
    "50/50":              [17,  85,  98],
    "unlikely":           [15,  75,  96],
    "veryUnlikely":       [13,  65,  94],
    "nearlyImpossible":   [10,  50,  91],
    "impossible":         [ 7,  35,  88]
  },
 9: {
    "certain":            [20,  99, 101],
    "nearlyCertain":      [20,  99, 101],
    "veryLikely":         [20,  99, 101],
    "likely":             [19,  95, 100],
    "50/50":              [18,  90,  99],
    "unlikely":           [17,  85,  98],
    "veryUnlikely":       [15,  75,  96],
    "nearlyImpossible":   [13,  65,  94],
    "impossible":         [10,  50,  91]
  }
}