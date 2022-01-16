import axios from '../../util/axios'

export const jobSearchDataService = (function () {
  const getJobs = () => {
    const url = '/api/list_scrappers/'
    return axios.get(url).then(res => res.data)
  }

  const getJobStatus = (jobId) => {
    const url = '/api/get_status/'
    return axios.post(url, { job_id: jobId }).then(res => res.data)
  }

  const getJobsStatus = (jobIds) => {
    const url = '/api/scrappers_statuses/'
    return axios.post(url, { job_ids: jobIds }).then(res => res.data)
  }

  const searchJob = (payload) => {
    const url = '/api/execute_scrapper/'
    return axios.post(url, payload).then(res => res.data)
  }

  const cancelJob = (jobId) => {
    const url = '/api/cancel_scrappers/'
    return axios.post(url, { job_id: jobId }).then(res => res.data)
  }

  return {
    getJobs,
    getJobStatus,
    getJobsStatus,
    searchJob,
    cancelJob,
  }
})()
