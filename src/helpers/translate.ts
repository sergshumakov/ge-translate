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
      folderId: 'b1gk5psvihgupg93uirb',
    },
    {
      headers: {
        Authorization: 'Api-Key AQVN32hmv_XXjk2Fi4BgBgUktDvNfcsjoZawomFW',
      },
    }
  )

  return response.data.translations[0].text
}
