import Cors from 'cors'
import { NextApiRequest, NextApiResponse } from 'next'
import { initMiddleware } from 'utils/middleware'
import { supabase } from 'utils/supabase'

const cors = initMiddleware(Cors({ methods: ['GET', 'OPTIONS'] }))

const SavedAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  await cors(req, res)
  if (req.method !== 'GET')
    return res.status(400).send({ error: 'Invalid method' })

  const { user_id } = req.query

  if (user_id == undefined || typeof user_id !== 'string')
    return res.status(400).json({ error: 'Invalid user_id' })

  const { data, error } = await supabase
    .from('links')
    .select('code, url, created_at')
    .eq('created_by', user_id)
    .order('created_at', { ascending: false })

  if (error) return res.status(400).json({ error })
  return res.status(200).json({ result: data })
}

export default SavedAPI
