export const getBalance = async () => {
  const res = await fetch(
    'http://localhost:8000/vipayment/profile.php'
  );

  return res.json();
};