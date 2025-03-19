function calculate() {
    // Тарифи
    const electricityRate = 4.32;
    const gasRate = 7.96;
    const waterRate = 31.00;

    // Отримання введених даних
    const electricityUsage = parseFloat(document.getElementById('electricityUsage').value) || 0;
    const gasUsage = parseFloat(document.getElementById('gasUsage').value) || 0;
    const waterUsage = parseFloat(document.getElementById('waterUsage').value) || 0;
    const heatingCost = parseFloat(document.getElementById('heatingCostInput').value) || 0;

    // Розрахунок вартості
    const electricityCost = electricityUsage * electricityRate;
    const gasCost = gasUsage * gasRate;
    const waterCost = waterUsage * waterRate;

    // Виведення результатів у таблицю
    document.getElementById('electricityCost').textContent = electricityCost.toFixed(2);
    document.getElementById('gasCost').textContent = gasCost.toFixed(2);
    document.getElementById('waterCost').textContent = waterCost.toFixed(2);
    document.getElementById('heatingCost').textContent = heatingCost.toFixed(2);

    // Загальна сума
    const totalCost = electricityCost + gasCost + waterCost + heatingCost;
    document.getElementById('total').textContent = `Загальна сума: ${totalCost.toFixed(2)} грн`;
}