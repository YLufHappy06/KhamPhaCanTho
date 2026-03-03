const navLinks = document.querySelectorAll('nav a');
const tipButton = document.getElementById('tipButton');
const tipText = document.getElementById('tipText');

const tips = [
    'Đi chợ nổi từ 5:30 - 7:00 để cảm nhận không khí nhộn nhịp nhất.',
    'Mang nón, kem chống nắng và nước uống khi tham quan ban ngày.',
    'Nên thử bánh tét lá cẩm làm quà vì dễ mang theo và đậm chất Cần Thơ.',
    'Dạo bến Ninh Kiều buổi tối để ngắm thành phố lên đèn rất đẹp.'
];

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        navLinks.forEach((item) => item.classList.remove('active'));
        link.classList.add('active');
    });
});

if (tipButton && tipText) {
    tipButton.addEventListener('click', () => {
        const randomTip = tips[Math.floor(Math.random() * tips.length)];
        tipText.textContent = `💡 ${randomTip}`;
    });
}
