class Builder{

    buildTeamsAtGroupStage(){
        return [
            {id: 1, name: 'Catar', isPrimeiroGrupo: false, isSegundoGrupo: false, grupo: 'A'},
            {id: 2, name: 'Equador', isPrimeiroGrupo: false, isSegundoGrupo: false, grupo: 'A'},
            {id: 3, name: 'Senegal', isPrimeiroGrupo: false, isSegundoGrupo: false, grupo: 'A'},
            {id: 4, name: 'Holanda', isPrimeiroGrupo: false, isSegundoGrupo: false, grupo: 'A'},
            {id: 5, name: 'Inglaterra', isPrimeiroGrupo: false, isSegundoGrupo: false, grupo: 'B'},
            {id: 6, name: 'Irã', isPrimeiroGrupo: false, isSegundoGrupo: false, grupo: 'B'},
            {id: 7, name: 'Estados Unidos', isPrimeiroGrupo: false, isSegundoGrupo: false, grupo: 'B'},
            {id: 8, name: 'País de Gales', isPrimeiroGrupo: false, isSegundoGrupo: false, grupo: 'B'},
            {id: 9, name: 'Argentina', isPrimeiroGrupo: false, isSegundoGrupo: false, grupo: 'C'},
            {id: 10, name: 'Arábia Saudita', isPrimeiroGrupo: false, isSegundoGrupo: false, grupo: 'C'},
            {id: 11, name: 'México', isPrimeiroGrupo: false, isSegundoGrupo: false, grupo: 'C'},
            {id: 12, name: 'Polônia', isPrimeiroGrupo: false, isSegundoGrupo: false, grupo: 'C'},
            {id: 13, name: 'França', isPrimeiroGrupo: false, isSegundoGrupo: false, grupo: 'D'},
            {id: 14, name: 'Austrália', isPrimeiroGrupo: false, isSegundoGrupo: false, grupo: 'D'},
            {id: 15, name: 'Dinamarca', isPrimeiroGrupo: false, isSegundoGrupo: false, grupo: 'D'},
            {id: 16, name: 'Tunísia', isPrimeiroGrupo: false, isSegundoGrupo: false, grupo: 'D'},
            {id: 17, name: 'Espanha', isPrimeiroGrupo: false, isSegundoGrupo: false, grupo: 'E'},
            {id: 18, name: 'Costa Rica', isPrimeiroGrupo: false, isSegundoGrupo: false, grupo: 'E'},
            {id: 19, name: 'Alemanha', isPrimeiroGrupo: false, isSegundoGrupo: false, grupo: 'E'},
            {id: 20, name: 'Japão', isPrimeiroGrupo: false, isSegundoGrupo: false, grupo: 'E'},
            {id: 21, name: 'Bélgica', isPrimeiroGrupo: false, isSegundoGrupo: false, grupo: 'F'},
            {id: 22, name: 'Canadá', isPrimeiroGrupo: false, isSegundoGrupo: false, grupo: 'F'},
            {id: 23, name: 'Marrocos', isPrimeiroGrupo: false, isSegundoGrupo: false, grupo: 'F'},
            {id: 24, name: 'Croácia', isPrimeiroGrupo: false, isSegundoGrupo: false, grupo: 'F'},
            {id: 25, name: 'Brasil', isPrimeiroGrupo: false, isSegundoGrupo: false, grupo: 'G'},
            {id: 26, name: 'Sérvia', isPrimeiroGrupo: false, isSegundoGrupo: false, grupo: 'G'},
            {id: 27, name: 'Suíça', isPrimeiroGrupo: false, isSegundoGrupo: false, grupo: 'G'},
            {id: 28, name: 'Camarões', isPrimeiroGrupo: false, isSegundoGrupo: false, grupo: 'G'},
            {id: 29, name: 'Portugal', isPrimeiroGrupo: false, isSegundoGrupo: false, grupo: 'H'},
            {id: 30, name: 'Gana', isPrimeiroGrupo: false, isSegundoGrupo: false, grupo: 'H'},
            {id: 31, name: 'Uruguai', isPrimeiroGrupo: false, isSegundoGrupo: false, grupo: 'H'},
            {id: 32, name: 'Coreia do Sul', isPrimeiroGrupo: false, isSegundoGrupo: false, grupo: 'H'},
        ];
    }

    buildTeamsAtRound16(teams){
        const primeiroA = teams.filter(t => t.isPrimeiroGrupo && t.grupo === 'A')[0];
        const segundoA = teams.filter(t => t.isSegundoGrupo && t.grupo === 'A')[0];
        const primeiroB = teams.filter(t => t.isPrimeiroGrupo && t.grupo === 'B')[0];
        const segundoB = teams.filter(t => t.isSegundoGrupo && t.grupo === 'B')[0];
        const primeiroC = teams.filter(t => t.isPrimeiroGrupo && t.grupo === 'C')[0];
        const segundoC = teams.filter(t => t.isSegundoGrupo && t.grupo === 'C')[0];
        const primeiroD = teams.filter(t => t.isPrimeiroGrupo && t.grupo === 'D')[0];
        const segundoD = teams.filter(t => t.isSegundoGrupo && t.grupo === 'D')[0];
        const primeiroE = teams.filter(t => t.isPrimeiroGrupo && t.grupo === 'E')[0];
        const segundoE = teams.filter(t => t.isSegundoGrupo && t.grupo === 'E')[0];
        const primeiroF = teams.filter(t => t.isPrimeiroGrupo && t.grupo === 'F')[0];
        const segundoF = teams.filter(t => t.isSegundoGrupo && t.grupo === 'F')[0];
        const primeiroG = teams.filter(t => t.isPrimeiroGrupo && t.grupo === 'G')[0];
        const segundoG = teams.filter(t => t.isSegundoGrupo && t.grupo === 'G')[0];
        const primeiroH = teams.filter(t => t.isPrimeiroGrupo && t.grupo === 'H')[0];
        const segundoH = teams.filter(t => t.isSegundoGrupo && t.grupo === 'H')[0];

        return [
            {id: primeiroA?.id, name: primeiroA?.name, idMatch: 49, isVencedor: false},
            {id: segundoB?.id, name: segundoB?.name, idMatch: 49, isVencedor: false},

            {id: primeiroC?.id, name: primeiroC?.name, idMatch: 50, isVencedor: false},
            {id: segundoD?.id, name: segundoD?.name, idMatch: 50, isVencedor: false},

            {id: primeiroB?.id, name: primeiroB?.name, idMatch: 51, isVencedor: false},
            {id: segundoA?.id, name: segundoA?.name, idMatch: 51, isVencedor: false},

            {id: primeiroD?.id, name: primeiroD?.name, idMatch: 52, isVencedor: false},
            {id: segundoC?.id, name: segundoC?.name, idMatch: 52, isVencedor: false},

            {id: primeiroE?.id, name: primeiroE?.name, idMatch: 53, isVencedor: false},
            {id: segundoF?.id, name: segundoF?.name, idMatch: 53, isVencedor: false},

            {id: primeiroG?.id, name: primeiroG?.name, idMatch: 54, isVencedor: false},
            {id: segundoH?.id, name: segundoH?.name, idMatch: 54, isVencedor: false},

            {id: primeiroF?.id, name: primeiroF?.name, idMatch: 55, isVencedor: false},
            {id: segundoE?.id, name: segundoE?.name, idMatch: 55, isVencedor: false},

            {id: primeiroH?.id, name: primeiroH?.name, idMatch: 56, isVencedor: false},
            {id: segundoG?.id, name: segundoG?.name, idMatch: 56, isVencedor: false},
        ]
    }

    buildTeamsAtQuarterFinals(teams){
        const vencedor49 = teams.filter(t => t.isVencedor && t.idMatch === 49)[0];
        const vencedor50 = teams.filter(t => t.isVencedor && t.idMatch === 50)[0];
        const vencedor51 = teams.filter(t => t.isVencedor && t.idMatch === 51)[0];
        const vencedor52 = teams.filter(t => t.isVencedor && t.idMatch === 52)[0];
        const vencedor53 = teams.filter(t => t.isVencedor && t.idMatch === 53)[0];
        const vencedor54 = teams.filter(t => t.isVencedor && t.idMatch === 54)[0];
        const vencedor55 = teams.filter(t => t.isVencedor && t.idMatch === 55)[0];
        const vencedor56 = teams.filter(t => t.isVencedor && t.idMatch === 56)[0];

        return [
            {id: vencedor49?.id, name: vencedor49?.name, idMatch: 57, isVencedor: false},
            {id: vencedor50?.id, name: vencedor50?.name, idMatch: 57, isVencedor: false},

            {id: vencedor53?.id, name: vencedor53?.name, idMatch: 58, isVencedor: false},
            {id: vencedor54?.id, name: vencedor54?.name, idMatch: 58, isVencedor: false},

            {id: vencedor51?.id, name: vencedor51?.name, idMatch: 59, isVencedor: false},
            {id: vencedor52?.id, name: vencedor52?.name, idMatch: 59, isVencedor: false},

            {id: vencedor55?.id, name: vencedor55?.name, idMatch: 60, isVencedor: false},
            {id: vencedor56?.id, name: vencedor56?.name, idMatch: 60, isVencedor: false},
        ]
    }

    buildTeamsAtSemiFinals(teams){
        const vencedor57 = teams.filter(t => t.isVencedor && t.idMatch === 57)[0];
        const vencedor58 = teams.filter(t => t.isVencedor && t.idMatch === 58)[0];
        const vencedor59 = teams.filter(t => t.isVencedor && t.idMatch === 59)[0];
        const vencedor60 = teams.filter(t => t.isVencedor && t.idMatch === 60)[0];

        return [
            {id: vencedor57?.id, name: vencedor57?.name, idMatch: 61, isVencedor: false},
            {id: vencedor58?.id, name: vencedor58?.name, idMatch: 61, isVencedor: false},

            {id: vencedor59?.id, name: vencedor59?.name, idMatch: 62, isVencedor: false},
            {id: vencedor60?.id, name: vencedor60?.name, idMatch: 62, isVencedor: false},
        ]
    }

    buildTeamsAtFinal(teams){
        const vencedor61 = teams.filter(t => t.isVencedor && t.idMatch === 61)[0];
        const vencedor62 = teams.filter(t => t.isVencedor && t.idMatch === 62)[0];

        return [
            {id: vencedor61?.id, name: vencedor61?.name, idMatch: 64, isVencedor: false},
            {id: vencedor62?.id, name: vencedor62?.name, idMatch: 64, isVencedor: false},
        ]
    }
}

const bulder = new Builder();
export default bulder;