defmodule LogLevel do
  def to_label(level, legacy?) do
   cond do
    legacy? && level == 0 -> :unknown
    level == 0 -> :trace
    level == 1 -> :debug
    level == 2 -> :info
    level == 3 -> :warning
    level == 4 -> :error
    (legacy? && level == 5) -> :unknown
    level == 5 -> :fatal
    true -> :unknown
   end
  end

  def alert_recipient(level, legacy?) do
    label = to_label(level , legacy?)
    cond do
      label in [:error, :fatal] -> :ops
      (label == :unknown && legacy?) -> :dev1
      label == :unknown -> :dev2
      true -> false
    end
  end
end
