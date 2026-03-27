export type Modalidade = {
    id: string
    icon: string
    name: string
    tag: string
    tagColor: string
    desc: string
    beneficios: string[]
    nivel: 'Todos os níveis' | 'Iniciantes OK' | 'Intermediário' | 'Avançado'
    horarios: string
}

export const modalidades: Modalidade[] = [
    {
        id: 'muay-thai',
        icon: '🥊',
        name: 'Muay Thai',
        tag: 'Striking',
        tagColor: '#e85d24',
        desc: 'Conhecido como "A Arte das Oito Armas", o Muay Thai utiliza socos, chutes, joelhadas e cotoveladas. Desenvolve condicionamento físico explosivo, coordenação motora e confiança real.',
        beneficios: ['Condicionamento físico', 'Autodefesa', 'Queima calórica alta', 'Disciplina mental'],
        nivel: 'Todos os níveis',
        horarios: 'Ter, Qui — 7h / 19h / 21h',
    },
    {
        id: 'bjj',
        icon: '🥋',
        name: 'Jiu-Jitsu',
        tag: 'Grappling',
        tagColor: '#3b8bd4',
        desc: 'Arte marcial baseada em alavancas, chaves e estrangulamentos no solo. Permite que praticantes menores controlem oponentes maiores usando técnica e leveragem em vez de força bruta.',
        beneficios: ['Autodefesa no chão', 'Foco e estratégia', 'Kimono e sem kimono', 'Competição'],
        nivel: 'Todos os níveis',
        horarios: 'Seg, Ter, Qua, Sex — 7h as 08h / 19h30 / 21h',
    },
    {
        id: 'boxe',
        icon: '🥊',
        name: 'Boxe',
        tag: 'Striking',
        tagColor: '#e85d24',
        desc: 'A arte dos punhos. Desenvolve timing, reflexos, esquivas e movimentação de pernas. Excelente para condicionamento cardiovascular e defesa pessoal no stand-up.',
        beneficios: ['Reflexos e timing', 'Cardio avançado', 'Mitts e sparring', 'Defesa pessoal'],
        nivel: 'Iniciantes OK',
        horarios: 'Seg, Qua, Sex — 06h as 07h e 20:30 as 21:30',
    },
    {
        id: 'taekwondo',
        icon: '🥋',
        name: 'Taekwondo',
        tag: 'Striking',
        tagColor: '#e85d24',
        desc: 'é uma arte marcial coreana, também praticada como esporte olímpico, conhecida pelo seu foco no uso dos pés e das mãos para defesa pessoal. O termo significa "o caminho dos pés e das mãos".',
        beneficios: ['Quedas e clinch', 'Defesa de queda', 'Força funcional', 'Explosão atlética'],
        nivel: 'Todos os níveis',
        horarios: 'Seg, Qua, Sex — 19h',
    },
]