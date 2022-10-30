import env from '@/helpers/env'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const axios = require('axios')

export default async function (
  text: string,
  targetLanguage: string
): Promise<string> {
  const response = await axios.post(
    'https://translate.api.cloud.yandex.net/translate/v2/translate',
    {
      targetLanguageCode: targetLanguage,
      texts: text,
      folderId: env.YANDEX_FOLDER_ID,
    },
    {
      headers: {
        Authorization: 'Api-Key ' + env.YANDEX_TRANSLATE_KEY,
      },
    }
  )

  return response.data.translations[0].text
}
