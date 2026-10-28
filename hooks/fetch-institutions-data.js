import { useEffect, useState } from "react"

import Fetch from "../services/fetch.js"
import TableService from "../services/tableService.js"

const useFetchInstitutionsData = () => {
  const [dataService, setDataService] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    Fetch.getJSON(process.env.aidesJeunesStatisticsURL)
      .then((data) => {
        setDataService(new TableService(data.institutions))
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })
  }, [])

  return { dataService, loading, error }
}

export default useFetchInstitutionsData
