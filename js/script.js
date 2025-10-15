{
	const formElement = document.querySelector(".js-form");
	const amountElement = document.querySelector(".js-amount");
	const currencyElement = document.querySelector(".js-currency");
	const resultElement = document.querySelector(".js-result");

	const calculateResult = (amount, currency) => {
		const rateEUR = 4.3319;
		const rateGBP = 5.1929;
		const rateUSD = 4.1297;

		switch (currency) {
			case "EUR":
				return amount / rateEUR;

			case "GBP":
				return amount / rateGBP;

			case "USD":
				return amount / rateUSD;
		}
	};

	formElement.addEventListener("submit", (event) => {
		event.preventDefault();

		const amount = +amountElement.value;
		const currency = currencyElement.value;

		const result = calculateResult(amount, currency);

		resultElement.innerHTML = `${amount.toFixed(
			2
		)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
	});
}
