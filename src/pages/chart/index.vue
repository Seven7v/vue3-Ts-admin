<template>
  <div class="mode-card p20">
    <el-row>
      <el-col :span="24" class="card">
        <el-card>
          <div ref="barLineChart" :style="{ width: '100%', height: '400px' }"></div>
        </el-card>
      </el-col>
    </el-row>
    <el-row class="mt20" gutter="20">
      <el-col :span="12">
        <el-card style="width: 100%">
          <div ref="pieChart" :style="{ width: '100%', height: '400px' }"></div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card style="width: 100%">
          <div ref="barChart" :style="{ width: '100%', height: '400px' }"></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue'
import * as echarts from 'echarts'
let echart = echarts

const barLineChart = ref(null)
const pieChart = ref(null)
const barChart = ref(null)
onMounted(() => {
  let chart = echart.init(barLineChart.value)
  let chartBar = echart.init(barChart.value)
  let chartPie = echart.init(pieChart.value)

  initBarChart(chartBar)
  initPieChart(chartPie)
  initBarLineChart(chart)
  window.onresize = function () {
    //自适应大小
    chart.resize()
    chartBar.resize()
    chartPie.resize()
  }
})
const initBarLineChart = chart => {
  let category = []
  let dottedBase = +new Date()
  let lineData = []
  let barData = []
  for (let i = 0; i < 20; i++) {
    let date = new Date((dottedBase += 3600 * 24 * 1000))
    category.push([date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-'))
    let b = Math.random() * 200
    let d = Math.random() * 200
    barData.push(b)
    lineData.push(d + b)
  }
  chart.setOption({
    backgroundColor: '#fff',
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '5%',
      right: '5%'
    },
    legend: {
      data: ['line', 'bar'],
      textStyle: {
        color: '#ccc'
      }
    },
    xAxis: {
      data: category,
      axisLine: {
        lineStyle: {
          color: '#ccc'
        }
      }
    },
    yAxis: {
      splitLine: { show: false },
      axisLine: {
        lineStyle: {
          color: '#ccc'
        }
      }
    },
    series: [
      {
        name: 'line',
        type: 'line',
        smooth: true,
        showAllSymbol: true,
        symbol: 'emptyCircle',
        symbolSize: 15,
        data: lineData
      },
      {
        name: 'bar',
        type: 'bar',
        barWidth: 10,
        itemStyle: {
          borderRadius: 5,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#ae86ff' },
            { offset: 1, color: '#eeb3ce' }
          ])
        },
        data: barData
      },
      {
        name: 'line',
        type: 'bar',
        barGap: '-100%',
        barWidth: 10,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(20,200,212,0.5)' },
            { offset: 0.2, color: '#eeb3ce' },
            { offset: 1, color: 'rgba(20,200,212,0)' }
          ])
        },
        z: -12,
        data: lineData
      },
      {
        name: 'dotted',
        type: 'pictorialBar',
        symbol: 'rect',
        itemStyle: {
          color: '#fff'
        },
        symbolRepeat: true,
        symbolSize: [12, 4],
        symbolMargin: 1,
        z: -10,
        data: lineData
      }
    ]
  })
  window.onresize = function () {
    //自适应大小
    chart.resize()
  }
}
const initBarChart = chartBar => {
  chartBar.setOption({
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        itemStyle: {
          borderRadius: 5,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#ae86ff' },
            { offset: 1, color: '#eeb3ce' }
          ])
        }
      }
    ]
  })
}
const initPieChart = chartPie => {
  chartPie.setOption({
    legend: {
      top: 'bottom'
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: 'Nightingale Chart',
        type: 'pie',
        radius: [20, 100],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data: [
          { value: 40, name: 'rose 1' },
          { value: 38, name: 'rose 2' },
          { value: 32, name: 'rose 3' },
          { value: 30, name: 'rose 4' },
          { value: 28, name: 'rose 5' },
          { value: 26, name: 'rose 6' },
          { value: 22, name: 'rose 7' },
          { value: 18, name: 'rose 8' }
        ]
      }
    ]
  })
}
</script>

<style lang="less"></style>
