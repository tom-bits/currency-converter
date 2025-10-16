{
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

	const updateResultText = (amount, result, currency) => {
		const resultElement = document.querySelector(".js-result");

		resultElement.innerHTML = `${amount.toFixed(
			2
		)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
	};

	const onFormSubmit = (event) => {
		event.preventDefault();

		const amountElement = document.querySelector(".js-amount");
		const currencyElement = document.querySelector(".js-currency");

		const amount = +amountElement.value;
		const currency = currencyElement.value;

		const result = calculateResult(amount, currency);

		updateResultText(amount, result, currency);
	};

	const init = () => {
		const formElement = document.querySelector(".js-form");

		formElement.addEventListener("submit", onFormSubmit);
	};

	init();
}
