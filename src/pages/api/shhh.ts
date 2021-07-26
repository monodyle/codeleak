import { patterns } from 'constants/pattern.const'
import { NextApiRequest, NextApiResponse } from 'next'
import { randomIdGenerator } from 'utils/generate'
import { supabase } from 'utils/supabase'

async function ShhhAPI (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST')
    return res.status(400).send({ error: 'Invalid method' })

  const { type, input, user_id } = JSON.parse(JSON.parse(req.body).body)

  if (user_id && typeof user_id !== 'string')
    return res.status(400).json({ error: 'Invalid user' })

  if (type !== 'code' && type !== 'url')
    return res.status(400).json({ error: 'Invalid type' })

  if (input === undefined || (input && typeof input !== 'string'))
    return res.status(400).json({ error: 'Invalid input' })

  if (type === 'code' && input.length !== 8)
    return res.status(400).json({ error: 'Invalid input length' })

  if (type === 'url' && patterns.url.test(input) === false)
    return res.status(400).json({ error: 'Invalid url input' })

  if (type === 'code') {
    const { data, error } = await supabase
      .from('links')
      .select('url, created_at')
      .eq('code', input)
      .single()
    if (error) return res.status(400).json({ error })
    return res.status(200).json({ result: data })
  }

  if (type === 'url') {
    let code = ''
    for (;;) {
      const newCode = randomIdGenerator()
      const { data, error } = await supabase
        .from('links')
        .select('url, created_at')
        .eq('code', newCode)
      if (error) return res.status(400).json({ error })
      if (data === null || data.length === 0) {
        code = newCode
        break
      }
    }
    const { data, error } = await supabase
      .from('links')
      .insert([{ code, url: input, created_by: user_id }])
    if (error) return res.status(400).json({ error })
    return res.status(200).json({ result: data?.[0] })
  }

  return res.status(200).json({ result: '' })
}

export default ShhhAPI