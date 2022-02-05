function korko(sijoitussumma, sijoitusaika, vuosikorko) {
  let summa = parseFloat(sijoitussumma);
  let aika = parseInt(sijoitusaika);
  let korko = parseFloat(vuosikorko);
  console.log(`Aika: ${summa}`);
  let paluuSumma = summa;
  for (let i = 0; i < aika; i++) {
    paluuSumma += paluuSumma * korko;
    console.log(paluuSumma);
  }
  return paluuSumma;
}

export default korko;
