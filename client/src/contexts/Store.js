import React, { useContext, useState, useEffect } from 'react'
import Api from '../utils/api'

const DataContext = React.createContext()

export function DataProvider({ children }) {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)

  const value = {
    getLocation: (data) => Api.getLocation(data),
    data,
  }

  return (
    <DataContext.Provider value={value}>
      {!loading && children}
    </DataContext.Provider>
  )
}

export function useDataContext() {
  return useContext(DataContext)
}
