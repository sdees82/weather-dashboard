import React from 'react';
import {
    AreaChart, Area, CartesianGrid, ResponsiveContainer, Tooltip, YAxis, XAxis
  } from 'recharts';

const RenderBarChart = ({hourlyTemps}) => {
  
    return(
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
        data={hourlyTemps}
        margin={{
          top: 10, right: 0, left: 0, bottom: 0,
        }}
      >
        <CartesianGrid  vertical={false} horizontal={false} stroke="green" tick="red"/>
        {hourlyTemps.length !== 0 ? <Area base={100} type="monotone" dataKey="temp" stroke="#8884d8" fill="#2a337c" />
        :<p>Loading</p>}
        <YAxis width={30} dataKey="temp" stroke="#8884d8" tick={{fontSize: 12, fill: '#fff'}}/>
        <XAxis height={30} dataKey="time" stroke="#8884d8" tick={{fontSize: 12, fill: '#fff'}}/>
        <Tooltip viewBox={{background: '#000'}} labelStyle={{color: '#fff'}} 
        cursor={{ stroke: '#8884d8', strokeWidth: 2 }} 
        wrapperStyle={{borderRadius: '5px', background: 'transparent'}} 
        itemStyle={{padding: '0', color: '#fff'}} 
        contentStyle={{fontSize: '.5em', borderRadius: '5px',background: 'transparent',}}/>
      </AreaChart>
      </ResponsiveContainer>
    )
}

export default RenderBarChart;
  