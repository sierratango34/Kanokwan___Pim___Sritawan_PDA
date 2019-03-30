require('minitest/autorun')
require('minitest/rg')
require_relative('../card.rb')
require_relative('../testing_task_2.rb')

class TestCardAndCardGame < MiniTest::Test

  def setup
    @card1 = Card.new("Hearts", 10)

    @card2 = Card.new("Diamonds", 4)

    @card_game = CardGame.new()
  end

  def test_check_card_class_exists
    assert_equal(Card, @card1.class)
  end

  def test_card_game_class_exists
    assert_equal(CardGame, @card_game.class)
  end

  def test_check_card_suit
    assert_equal("Hearts", @card1.suit)
  end

  def test_check_card_value
    assert_equal(10, @card1.value)
  end

  def test_check_for_Ace
    assert_equal(false, @card_game.check_for_Ace(@card1))
  end

  def test_highest_card
    assert_equal(@card1, @card_game.highest_card(@card1, @card2))
  end

  def test_card_total
    cards = [@card1, @card2]
    assert_equal("You have a total of 14", CardGame.cards_total(cards))
  end

end
