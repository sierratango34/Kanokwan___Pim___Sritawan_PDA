### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame

# checkforAce should have underscores, such as 'check_for_Ace' for clarity purposes
    if card.value = 1 # There should be a double equals sign - '==' - instead of a single equals sign
      return true
    else
      return false
    end
  end

# The keyword to define a function, 'def', is spelled incorrectly as 'dif'.
# There is also no comma in between the two parameters, card1 and card2.
  dif highest_card(card1 card2)
  if card1.value > card2.value
    return card.name # There is no card named 'card' in this function. Additionally, class attribute 'name' does not exist in the Card class.
  else
    card2
  end
  #There should be an end here to close off the function
end
# This closing 'end' to 'class' is in the incorrect place.
end

def self.cards_total(cards)
  total # Total has not been assigned a value of anything
  for card in cards
    total += card.value
    return "You have a total of" + total # This will error because, presuming that 'total' ought to be an integer, it cannot add an integer on to a string, therefore 'total' must be converted into a string with '.to_i'.
    # Having a 'return' inside the loop will cause it to break out of the loop, therefore the correct total will never add up and it will attempt to print the string out for each card in the loop and add onto the initial total rather than adding all the values up.
  end
end
# There should be an 'end' here.


```
