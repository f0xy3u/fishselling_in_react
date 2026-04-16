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
    name: 'Wild-Caught King Salmon',
    description: 'Pristine waters of the Pacific Northwest',
    price: 32,
    unit: '/ lb',
    category: 'fish',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAANXeFa2wQ5iT1jQL3scYY-0GMvFwuBtc5ZXX_PCRG94jBIF8eZCkkjuhRGFUTcV8SNBTfn8EIPjk1yhf7uj-MyCEBltg26L_w6qoCKsxmvLE1CPiVMDoynzjTGYRb0RrE19go3he15VWjgNzi0xhh7KvFNXx-B1vS8Mw3N4dH_yZ3PCoygdhDFSDiNlT9lewZWkpLQWlEiAOJLNuIbB9CbgsQrc_rynAtucC3XF-wswzBiVQORPj5l1N23NIdeJhFoBS5mq2ctYk',
    size: 'wide',
  },
  {
    name: 'Atlantic Blue Oysters',
    description: 'Salty, clean finish',
    price: 18,
    unit: '/ doz',
    category: 'shellfish',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBtaPLhraV8fabdl13hQF91At7PQ8LXLSf_EXTmpKO8_wqgXA69jijCBicqc1tLdCUZkaPAAJLlTn8LZSubDWqwzAmKIwq1KIs8aubL3p4ITb6OdsxDObR0zZJBkFTec3qQf9IRJ6vU-Pihb8qi4kJjddE63FJalLiwJD8wA3ip2LabSaf5nGMFFxzci64rt5bViius1-LNC5hqzMXwrdVkACT_jznBM_-SBdUIEsY2N0M5o3u3IyLHCsPHqzTzSdtk8Evn0AZAAZ8',
    size: 'small',
  },
  {
    name: 'Local Gulf Shrimp',
    description: 'Sweet and firm texture',
    price: 24,
    unit: '/ lb',
    category: 'shellfish',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCHqLUrFvAUZvksZPlv77O5fMaEVrI467PbbGOMsz9_s6NyI8VyC5n_YSHNrYonM5L_cUxPcrrpjkQAipfkjpBA-G6DbONI5o-ZNDw8cx1_g200R048BBoPo34QZp_U-A8OtOXx-DoK8Ez6r8l9QxGyHcGN6LcgB1cSF5MB3DPLdr41rjYVzs0LQUQtMrVjJ3uA9qE5ousQ8UH6J0Ri6EXmO5wFUf3i1XezEixWcMPp2CDpyfS2TTBn2_Hmy5hnpQxM4Va9L8ExFsk',
    size: 'small',
  },
  {
    name: 'Sea Scallops',
    description: 'Diver-caught, exceptionally sweet',
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
    title: 'Herb-Crusted King Salmon',
    time: '15 min',
    description:
      'Simple herb crust with dill, parsley and a squeeze of fresh lemon. Perfect for a quick, healthy weeknight dinner.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAANXeFa2wQ5iT1jQL3scYY-0GMvFwuBtc5ZXX_PCRG94jBIF8eZCkkjuhRGFUTcV8SNBTfn8EIPjk1yhf7uj-MyCEBltg26L_w6qoCKsxmvLE1CPiVMDoynzjTGYRb0RrE19go3he15VWjgNzi0xhh7KvFNXx-B1vS8Mw3N4dH_yZ3PCoygdhDFSDiNlT9lewZWkpLQWlEiAOJLNuIbB9CbgsQrc_rynAtucC3XF-wswzBiVQORPj5l1N23NIdeJhFoBS5mq2ctYk',
  },
  {
    title: 'Garlic Butter Gulf Shrimp',
    time: '10 min',
    description:
      'Succulent shrimp sauteed in garlic butter with a splash of white wine and fresh parsley. Serve over pasta or rice.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCHqLUrFvAUZvksZPlv77O5fMaEVrI467PbbGOMsz9_s6NyI8VyC5n_YSHNrYonM5L_cUxPcrrpjkQAipfkjpBA-G6DbONI5o-ZNDw8cx1_g200R048BBoPo34QZp_U-A8OtOXx-DoK8Ez6r8l9QxGyHcGN6LcgB1cSF5MB3DPLdr41rjYVzs0LQUQtMrVjJ3uA9qE5ousQ8UH6J0Ri6EXmO5wFUf3i1XezEixWcMPp2CDpyfS2TTBn2_Hmy5hnpQxM4Va9L8ExFsk',
  },
  {
    title: 'Pan-Seared Scallops',
    time: '20 min',
    description:
      'Golden-crusted, buttery scallops served on a bed of sweet pea puree. An elegant appetizer or light main course.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC2_qFBRUvkvbWCyXWbvmkTqvMquSMcLUX1fOShh0f0Wtsnz4m1DEQeSC_5uM83U_07TgdZiXOc9sAo2lZNwsQEiq4zXq8Pf4V1KutnjrIOMSjeSs6AGEFXSE7VYyC4fhGY8TrrmIO86N0uvhH55ymrcQ2JP7Igxn5lelNSTy_7X2ZUDKqg74U9MtyP2A_0BMw1ZEFSiibkQx5ieIszpI2HGjHTyJCK0k-4cV8bP-hwJ_xw-xpl7GFLys1shj4LglK9Ptkkc47Gcpk',
  },
]
