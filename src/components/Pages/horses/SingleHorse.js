/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteHorse } from 'reducers/horse';

export const SingleHorse = () => {
  const { id } = useParams();
  const horseList = useSelector((store) => store.horse.horseList);
  console.log('data from singlehorse', horseList)

  const horse = horseList.find((singleHorse) => singleHorse._id === id);
  console.log('data from horse', horse)

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { open, setOpen } = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedCardId, setSelectedCardId] = useState(null);
};

const handleCardClick = (card) => {
  setSelectedCardId(card._id);
  handleOpen();
};
