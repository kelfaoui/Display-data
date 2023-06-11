import React from "react";
//npm install recharts
import { Pie, Cell, PieChart, Label } from "recharts";
export default function PrecisionRoll({ R }) {
    R *= 100
    const data = [{ value: R }, { value: 100 - R }, { value: 1 }];
    return (
        <PieChart width={730} height={250}>
            <Pie
                data={data}
                cx="8%"
                cy="20%"
                dataKey="value"
                innerRadius={25}
                outerRadius={32}
            >   
 
                {data.map((entry, index) => {
                    if (index === 1 || index === 2) {
                        return <Cell key={`cell-${index}`} fill="#f3f6f9" />;
                    }
                    return <Cell key={`cell-${index}`} fill="green" />;
                })}
                <Label
                     className="red"
                    value={data[0].value + "%"}
                    position="center"
                    fill="grey"
                    style={{
                        fontSize: "17px",
                        fontWeight: "bold",
                        fontFamily: "Roboto",
                    }}
                />
            </Pie>
        </PieChart>
    );
}
