import cards from '../../tarot.json';

  export default (req, res) => {
    const card = cards[Math.floor(Math.random() * cards.length)];
    res.status(200).json(card);
  }
