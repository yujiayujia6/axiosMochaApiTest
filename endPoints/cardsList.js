const { newAxiosInstance } = require("../utility/common");

const endPoint = "/cards/list";

const getCardsList = async (token) => {
  const axiosInstance = await newAxiosInstance(token);
  const response = await axiosInstance(endPoint);
  return response;
};

const getCardKey = async (token) => {
  const axiosInstance = await newAxiosInstance(token);
  const response = await axiosInstance(endPoint);
  const cardList = response.data.Data.Cards;
  var newCardList = [];
  for (var i = 0; i < cardList.length; i++) {
    newCardList = newCardList.concat(cardList[i].CardInstance[0]);
  }
  const card = newCardList.find(({ ImageUrl }) => ImageUrl < "910");
  return card.CardKey;
};

module.exports = {
  getCardsList,
  getCardKey,
};
