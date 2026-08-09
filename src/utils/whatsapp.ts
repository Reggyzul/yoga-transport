export const DEFAULT_WA_NUMBER = '628813305066';

export const DEFAULT_WA_TEMPLATE = `Yoga transport
================ 
https://www.yogatransport.my.id

MELAYANI :*
Shuttle Airport
Malang - Juanda👇
Juanda - Malang

MALANG KOTA - JUANDA
👉 Reguler @150k (NON TOL)
👉 CARTER DROP/PRIVATE  400k (NON TOL & MAKSIMAL 4 org 1 ALAMAT)

JUANDA - MALANG KOTA
👉 REGULER  @150k (NON TOL)
👉 CARTER DROP/PRIVATE 400k (NON TOL & Maksimal 4 ORG 1 ALAMAT)

MALANG KAB/BATU - JUANDA
👉 REGULER @170k (NON TOL)
👉  CARTER DROP/PRIVATE  450k (NON TOL & MAKSIMAL 4 org 1 ALAMAT)

JUANDA - MALANG KAB/BATU
👉 REGULER @170k (NON TOL)
👉  CARTER DROP/PRIVATE  450k (NON TOL & MAKSIMAL 4 ORG 1 ALAMAT)

Melayani :
TOUR KOTA MALANG👇

👉 Bromo Sunrise
👉 KWB (Kota Wisata Batu)
👉 Panorama Pantai Selatan`;

export const openWhatsApp = (customMessage?: string) => {
  const text = customMessage && customMessage.trim().length > 0 ? customMessage : DEFAULT_WA_TEMPLATE;
  const url = `https://api.whatsapp.com/send?phone=${DEFAULT_WA_NUMBER}&text=${encodeURIComponent(text)}`;
  window.open(url, '_blank', 'noreferrer');
};
