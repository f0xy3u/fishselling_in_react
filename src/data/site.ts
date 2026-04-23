export type Category = 'fish' | 'shellfish'

export type Product = {
  name: string
  description: string
  price: number
  unit: string
  category: Category
  image: string
  size: 'wide' | 'small'
}

export type CartItem = Product & { qty: number }

export type Recipe = {
  title: string
  time: string
  description: string
  image: string
}

export const products: Product[] = [
  {
    name: 'Divoký královský losos',
    description: 'Z křišťálově čistých vod severozápadního Pacifiku',
    price: 32,
    unit: '/ lb',
    category: 'fish',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAANXeFa2wQ5iT1jQL3scYY-0GMvFwuBtc5ZXX_PCRG94jBIF8eZCkkjuhRGFUTcV8SNBTfn8EIPjk1yhf7uj-MyCEBltg26L_w6qoCKsxmvLE1CPiVMDoynzjTGYRb0RrE19go3he15VWjgNzi0xhh7KvFNXx-B1vS8Mw3N4dH_yZ3PCoygdhDFSDiNlT9lewZWkpLQWlEiAOJLNuIbB9CbgsQrc_rynAtucC3XF-wswzBiVQORPj5l1N23NIdeJhFoBS5mq2ctYk',
    size: 'wide',
  },
  {
    name: 'Atlantské modré ústřice',
    description: 'Slaná, čistá dochuť',
    price: 18,
    unit: '/ doz',
    category: 'shellfish',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBtaPLhraV8fabdl13hQF91At7PQ8LXLSf_EXTmpKO8_wqgXA69jijCBicqc1tLdCUZkaPAAJLlTn8LZSubDWqwzAmKIwq1KIs8aubL3p4ITb6OdsxDObR0zZJBkFTec3qQf9IRJ6vU-Pihb8qi4kJjddE63FJalLiwJD8wA3ip2LabSaf5nGMFFxzci64rt5bViius1-LNC5hqzMXwrdVkACT_jznBM_-SBdUIEsY2N0M5o3u3IyLHCsPHqzTzSdtk8Evn0AZAAZ8',
    size: 'small',
  },
  {
    name: 'Místní krevety z Mexického zálivu',
    description: 'Sladká chuť a pevná textura',
    price: 24,
    unit: '/ lb',
    category: 'shellfish',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCHqLUrFvAUZvksZPlv77O5fMaEVrI467PbbGOMsz9_s6NyI8VyC5n_YSHNrYonM5L_cUxPcrrpjkQAipfkjpBA-G6DbONI5o-ZNDw8cx1_g200R048BBoPo34QZp_U-A8OtOXx-DoK8Ez6r8l9QxGyHcGN6LcgB1cSF5MB3DPLdr41rjYVzs0LQUQtMrVjJ3uA9qE5ousQ8UH6J0Ri6EXmO5wFUf3i1XezEixWcMPp2CDpyfS2TTBn2_Hmy5hnpQxM4Va9L8ExFsk',
    size: 'small',
  },
  {
    name: 'Mořské mušle svatého Jakuba',
    description: 'Ruční sběr potápěči, výjimečně sladké',
    price: 28,
    unit: '/ lb',
    category: 'shellfish',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC2_qFBRUvkvbWCyXWbvmkTqvMquSMcLUX1fOShh0f0Wtsnz4m1DEQeSC_5uM83U_07TgdZiXOc9sAo2lZNwsQEiq4zXq8Pf4V1KutnjrIOMSjeSs6AGEFXSE7VYyC4fhGY8TrrmIO86N0uvhH55ymrcQ2JP7Igxn5lelNSTy_7X2ZUDKqg74U9MtyP2A_0BMw1ZEFSiibkQx5ieIszpI2HGjHTyJCK0k-4cV8bP-hwJ_xw-xpl7GFLys1shj4LglK9Ptkkc47Gcpk',
    size: 'wide',
  },
]

export const recipes: Recipe[] = [
  {
    title: 'Královský losos v bylinkové krustě',
    time: '15 min',
    description:
      'Jednoduchá bylinková krusta s koprem, petrželí a šťávou z čerstvého citronu. Ideální pro rychlou a zdravou večeři během týdne.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAANXeFa2wQ5iT1jQL3scYY-0GMvFwuBtc5ZXX_PCRG94jBIF8eZCkkjuhRGFUTcV8SNBTfn8EIPjk1yhf7uj-MyCEBltg26L_w6qoCKsxmvLE1CPiVMDoynzjTGYRb0RrE19go3he15VWjgNzi0xhh7KvFNXx-B1vS8Mw3N4dH_yZ3PCoygdhDFSDiNlT9lewZWkpLQWlEiAOJLNuIbB9CbgsQrc_rynAtucC3XF-wswzBiVQORPj5l1N23NIdeJhFoBS5mq2ctYk',
  },
  {
    title: 'Krevety zálivu na česnekovém másle',
    time: '10 min',
    description:
      'Šťavnaté krevety restované na česnekovém másle s kapkou bílého vína a čerstvou petrželí. Podávejte s těstovinami nebo rýží.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCHqLUrFvAUZvksZPlv77O5fMaEVrI467PbbGOMsz9_s6NyI8VyC5n_YSHNrYonM5L_cUxPcrrpjkQAipfkjpBA-G6DbONI5o-ZNDw8cx1_g200R048BBoPo34QZp_U-A8OtOXx-DoK8Ez6r8l9QxGyHcGN6LcgB1cSF5MB3DPLdr41rjYVzs0LQUQtMrVjJ3uA9qE5ousQ8UH6J0Ri6EXmO5wFUf3i1XezEixWcMPp2CDpyfS2TTBn2_Hmy5hnpQxM4Va9L8ExFsk',
  },
  {
    title: 'Mušle svatého Jakuba opečené na pánvi',
    time: '20 min',
    description:
      'Dozlatova opečené mušle na másle podávané na jemném hráškovém pyré. Elegantní předkrm nebo lehký hlavní chod.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC2_qFBRUvkvbWCyXWbvmkTqvMquSMcLUX1fOShh0f0Wtsnz4m1DEQeSC_5uM83U_07TgdZiXOc9sAo2lZNwsQEiq4zXq8Pf4V1KutnjrIOMSjeSs6AGEFXSE7VYyC4fhGY8TrrmIO86N0uvhH55ymrcQ2JP7Igxn5lelNSTy_7X2ZUDKqg74U9MtyP2A_0BMw1ZEFSiibkQx5ieIszpI2HGjHTyJCK0k-4cV8bP-hwJ_xw-xpl7GFLys1shj4LglK9Ptkkc47Gcpk',
  },
]
