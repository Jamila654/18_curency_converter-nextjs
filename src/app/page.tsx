"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useState, useEffect, ChangeEvent } from "react";
import { Currency } from "@/lib/currency";
import { currencies, currencyFlags } from "@/lib/currency";
import { Input } from "@/components/ui/input";
export default function Home() {
  type ExchangeRates = {
    [key: string]: number;
  };

  const [amount, setAmount] = useState<number>(1);
  const [fromCurrency, setFromCurrency] = useState<Currency>("USD");
  const [toCurrency, setToCurrency] = useState<Currency>("PKR");
  const [exchangeRates, setExchangeRates] = useState<ExchangeRates>({});
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          "https://v6.exchangerate-api.com/v6/94c211b215fdfe95e0c61d95/latest/USD"
        );
        const data = await res.json();
        if (data.result === "success") {
          setExchangeRates(data.conversion_rates);
        } else {
          throw new Error("Failed to fetch exchange rates.");
        }
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchExchangeRates();
  }, []);

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setAmount(parseFloat(e.target.value));
  };

  const handleConversion = () => {
    if (!exchangeRates[fromCurrency] || !exchangeRates[toCurrency]) {
      setError("Exchange rates not available.");
      return;
    }

    const rate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];
    const converted = amount * rate;
    setConvertedAmount(converted);
  };

  const switchCurrencies = () => {
    const tempCurrency = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(tempCurrency);
  };
  const resetFields = () => {
    setAmount(1);
    setFromCurrency("USD");
    setToCurrency("PKR");
    setConvertedAmount(null);
    setError(null);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-slate-900">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <div className="relative">
          <Button
            className="absolute -top-3 -right-3 w-10 rounded-full bg-red-800 text-white flex items-center justify-center"
            onClick={resetFields}
          >
            ✕
          </Button>
        <Card className="-ml-5">
          <CardHeader>
            <CardTitle className="text-center">Currency Converter</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-5">
            <div className="enter-amount">
              <h1>Enter Amount</h1>
              <Input
                type="number"
                value={amount}
                onChange={handleAmountChange}
              />
            </div>
            <div className="from-to flex items-center justify-between gap-10">
              <div className="from">
                <h1>From</h1>
                <Select
                  onValueChange={(value) => setFromCurrency(value as Currency)}
                  value={fromCurrency}
                >
                  <SelectTrigger className="w-[100px]">
                    <SelectValue placeholder={fromCurrency} />
                  </SelectTrigger>
                  <SelectContent>
                    {currencies.map((currencyCode) => (
                      <SelectItem key={currencyCode} value={currencyCode}>
                        <div className="flex items-center">
                          <Image
                            src={currencyFlags[currencyCode]}
                            alt={`${currencyCode} flag`}
                            width={20}
                            height={15}
                          />
                          <span className="ml-2">{currencyCode}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="switch">
                <Button
                  variant="ghost"
                  className="rounded-full mt-5"
                  onClick={switchCurrencies}
                >
                  <Image
                    src="/switch.png"
                    alt="switch-btn"
                    width={30}
                    height={30}
                  />
                </Button>
              </div>
              <div className="to">
                <h1>To</h1>
                <Select
                  onValueChange={(value) => setToCurrency(value as Currency)}
                  value={toCurrency}
                >
                  <SelectTrigger className="w-[100px]">
                    <SelectValue placeholder={toCurrency} />
                  </SelectTrigger>
                  <SelectContent>
                    {currencies.map((currencyCode) => (
                      <SelectItem key={currencyCode} value={currencyCode}>
                        <div className="flex items-center">
                          <Image
                            src={currencyFlags[currencyCode]}
                            alt={`${currencyCode} flag`}
                            width={20}
                            height={15}
                          />
                          <span className="ml-2">{currencyCode}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <div className="display w-full items-start">
              {loading ? (
                <p>Loading exchange rates...</p>
              ) : error ? (
                <p>Error: {error}</p>
              ) : convertedAmount !== null ? (
                <p>
                  {amount} {fromCurrency} = {convertedAmount.toFixed(5)}{" "}
                  {toCurrency}
                </p>
              ) : (
                <p>Enter an amount and select currencies to convert.</p>
              )}
            </div>
            <div className="get-exchange w-full">
              <Button
                className="w-full bg-slate-900 hover:opacity-90"
                onClick={handleConversion}
                disabled={loading || !amount}
              >
                Get Exchange Rate
              </Button>
            </div>
          </CardFooter>
        </Card>
        </div>
      </main>
    </div>
  );
}
