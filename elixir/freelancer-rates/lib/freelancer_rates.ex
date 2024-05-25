defmodule FreelancerRates do
  def daily_rate(hourly_rate), do: (hourly_rate * 8.0)


  def apply_discount(before_discount, discount) do
   before_discount - (before_discount * discount / 100)
  end

  def monthly_rate(hourly_rate, discount) do
    month_rate = hourly_rate*8*22
    trunc(ceil(apply_discount(month_rate , discount)))

  end

  def days_in_budget(budget, hourly_rate, discount) do
    day_rate = daily_rate(hourly_rate)
    discounted_day_rate = apply_discount(day_rate, discount)
    days = budget / discounted_day_rate
    trunc(days * 10.0) / 10.0
  end
end
