import * as S from "./styles";
import { AreaChart, YAxis, CartesianGrid, Area, Tooltip } from "recharts";
import { CustomTooltip } from "../CustomChartTooltip";
import { ChartDataInterface } from "../../helper/interfaces";

interface ChartProps {
  chartData: ChartDataInterface;
}

export function Chart({ chartData }: ChartProps) {
  return (
    <S.Container>
      <S.ChartTopInfoContainer>
        <S.ChartTitleContainer>
          <S.ChartTitle>Total de faturamento mensal</S.ChartTitle>
          <S.ChartSubtext>Julho 2020</S.ChartSubtext>
        </S.ChartTitleContainer>
        <S.ChartCaptionsContainer>
          <S.ChartCaption>Este mês</S.ChartCaption>
          <S.ChartCaptionGrey>Mês passado</S.ChartCaptionGrey>
        </S.ChartCaptionsContainer>
      </S.ChartTopInfoContainer>
      <S.ChartContainer>
        {chartData?.data ? (
          <AreaChart
            width={720}
            height={355}
            data={chartData?.data}
            margin={{ top: 0, right: -40, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="1" y2="0">
                <stop offset="5%" stopColor="#37F3FF" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3751FF00" stopOpacity={0} />
              </linearGradient>
            </defs>
            <YAxis
              tickCount={7}
              orientation="right"
              tick={{ fontSize: "11px", fill: "#9FA2B4" }}
              tickSize={2}
              domain={[0, 60]}
              strokeWidth={0}
            />
            <CartesianGrid vertical={false} />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="july"
              stroke="#FC3C8D"
              strokeWidth={2}
              fillOpacity={0.1}
              fill="url(#colorUv)"
              activeDot={{
                stroke: "#dfe8eb",
                strokeWidth: 4,
                r: 6,
              }}
            />
            <Area
              type="monotone"
              dataKey="june"
              stroke="#DFE0EB"
              strokeWidth={2}
              fillOpacity={0}
              activeDot={false}
              dot={false}
            />
          </AreaChart>
        ) : (
          <S.ChartUnavailableContainer>
            <S.ChartUnavailableMessage>
              Gráfico indisponível
            </S.ChartUnavailableMessage>
          </S.ChartUnavailableContainer>
        )}
      </S.ChartContainer>
    </S.Container>
  );
}
