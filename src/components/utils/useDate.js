function useDate() {
  const t = new Date();
  const d = t.getDate();
  const mt = t.getMonth();
  const wd = t.getDay();
  

  const months = [
    'Ocak',
    'Şubat',
    'Mart',
    'Nisan',
    'Mayıs',
    'Haziran',
    'Temmuz',
    'Ağustos',
    'Eylül',
    'Ekim',
    'Kasım',
    'Aralık',
  ];

  const days = [
    'Pazartesi',
    'Salı',
    'Çarşamba',
    'Perşembe',
    'Cuma',
    'Cumartesi',
    'Pazar',
  ];

  const month = months[mt];
  const date = d + ' ' + month;
  const day = days[wd];
  return {date,day}
}
export default useDate