import { IBlock } from '@types'

export const startBookingPeriod = import.meta.env.ERK_START_BOOKING_PERIOD;

export const endBookingPeriod = import.meta.env.ERK_END_BOOKING_PERIOD;

export const contacts = {
    /* telephone number for visitors to contact */
    supportTel: '+237 6 90 19 14 04',

    /* email for visitors to contact */
    supportMailInfo: 'info@eureka-residences.com',
    
    supportMailContact: 'contact@eureka-residences.com'
};

export const links = {
    twitter: import.meta.env.ERK_TWITTER,

    x: import.meta.env.ERK_X,

    facebook: import.meta.env.ERK_FACEBOOK,

    youtube: import.meta.env.ERK_YOUTUBE,

    linkedin: import.meta.env.ERK_LINKEDIN,

    instagram: import.meta.env.ERK_INSTAGRAM,
};

/* Static Data */

export const eurekaBlock : IBlock = {
    id: 'residence-eureka',
    name: 'Résidence Eureka',

    totalFloor:  parseInt(import.meta.env.ERK_EUREKA_TOTAL_FLOOR),
    totalRoom: parseInt(import.meta.env.ERK_EUREKA_TOTAL_ROOM),

    bReady: parseInt(import.meta.env.ERK_EUREKA_B_READY) != 0,
    scheduledDate: import.meta.env.ERK_EUREKA_SCHEDULED_DATE,
    
    totalSoloConfortRoom: parseInt(import.meta.env.ERK_EUREKA_TOTAL_SOLO_CONFORT_ROOM),
    totalSoloPremiumRoom: parseInt(import.meta.env.ERK_EUREKA_TOTAL_SOLO_PREMIUM_ROOM),
    totalDuoRoom: parseInt(import.meta.env.ERK_EUREKA_TOTAL_DUO_ROOM),
    availableRoomCount: parseInt(import.meta.env.ERK_EUREKA_AVAILABLE_ROOM_COUNT),
    availableSoloConfortRoomCount: parseInt(import.meta.env.ERK_EUREKA_AVAILABLE_SOLO_CONFORT_ROOM_COUNT),
    availableSoloPremiumRoomCount: parseInt(import.meta.env.ERK_EUREKA_AVAILABLE_SOLO_PREMIUM_ROOM_COUNT),
    availableDuoRoomCount: parseInt(import.meta.env.ERK_EUREKA_AVAILABLE_DUO_ROOM_COUNT),
};

export const sigmaBlock : IBlock = {
    id: 'residence-sigma',
    name: 'Résidence Sigma',

    totalFloor:  parseInt(import.meta.env.ERK_SIGMA_TOTAL_FLOOR),
    totalRoom: parseInt(import.meta.env.ERK_SIGMA_TOTAL_ROOM),

    bReady: parseInt(import.meta.env.ERK_SIGMA_B_READY) != 0,
    scheduledDate: import.meta.env.ERK_SIGMA_SCHEDULED_DATE,
    
    totalSoloConfortRoom: parseInt(import.meta.env.ERK_SIGMA_TOTAL_SOLO_CONFORT_ROOM),
    totalSoloPremiumRoom: parseInt(import.meta.env.ERK_SIGMA_TOTAL_SOLO_PREMIUM_ROOM),
    totalDuoRoom: parseInt(import.meta.env.ERK_SIGMA_TOTAL_DUO_ROOM),
    availableRoomCount: parseInt(import.meta.env.ERK_SIGMA_AVAILABLE_ROOM_COUNT),
    availableSoloConfortRoomCount: parseInt(import.meta.env.ERK_SIGMA_AVAILABLE_SOLO_CONFORT_ROOM_COUNT),
    availableSoloPremiumRoomCount: parseInt(import.meta.env.ERK_SIGMA_AVAILABLE_SOLO_PREMIUM_ROOM_COUNT),
    availableDuoRoomCount: parseInt(import.meta.env.ERK_SIGMA_AVAILABLE_DUO_ROOM_COUNT),
};

export const gammaBlock : IBlock = {
    id: 'residence-gamma',
    name: 'Résidence Gamma',

    totalFloor:  parseInt(import.meta.env.ERK_GAMMA_TOTAL_FLOOR),
    totalRoom: parseInt(import.meta.env.ERK_GAMMA_TOTAL_ROOM),

    bReady: parseInt(import.meta.env.ERK_GAMMA_B_READY) != 0,
    scheduledDate: import.meta.env.ERK_GAMMA_SCHEDULED_DATE,
    
    totalSoloConfortRoom: parseInt(import.meta.env.ERK_GAMMA_TOTAL_SOLO_CONFORT_ROOM),
    totalSoloPremiumRoom: parseInt(import.meta.env.ERK_GAMMA_TOTAL_SOLO_PREMIUM_ROOM),
    totalDuoRoom: parseInt(import.meta.env.ERK_GAMMA_TOTAL_DUO_ROOM),
    availableRoomCount: parseInt(import.meta.env.ERK_GAMMA_AVAILABLE_ROOM_COUNT),
    availableSoloConfortRoomCount: parseInt(import.meta.env.ERK_GAMMA_AVAILABLE_SOLO_CONFORT_ROOM_COUNT),
    availableSoloPremiumRoomCount: parseInt(import.meta.env.ERK_GAMMA_AVAILABLE_SOLO_PREMIUM_ROOM_COUNT),
    availableDuoRoomCount: parseInt(import.meta.env.ERK_GAMMA_AVAILABLE_DUO_ROOM_COUNT),
};

export const deltaBlock : IBlock = {
    id: 'residence-delta',
    name: 'Résidence Delta',

    totalFloor:  parseInt(import.meta.env.ERK_DELTA_TOTAL_FLOOR),
    totalRoom: parseInt(import.meta.env.ERK_DELTA_TOTAL_ROOM),

    bReady: parseInt(import.meta.env.ERK_DELTA_B_READY) != 0,
    scheduledDate: import.meta.env.ERK_DELTA_SCHEDULED_DATE,
    
    totalSoloConfortRoom: parseInt(import.meta.env.ERK_DELTA_TOTAL_SOLO_CONFORT_ROOM),
    totalSoloPremiumRoom: parseInt(import.meta.env.ERK_DELTA_TOTAL_SOLO_PREMIUM_ROOM),
    totalDuoRoom: parseInt(import.meta.env.ERK_DELTA_TOTAL_DUO_ROOM),
    availableRoomCount: parseInt(import.meta.env.ERK_DELTA_AVAILABLE_ROOM_COUNT),
    availableSoloConfortRoomCount: parseInt(import.meta.env.ERK_DELTA_AVAILABLE_SOLO_CONFORT_ROOM_COUNT),
    availableSoloPremiumRoomCount: parseInt(import.meta.env.ERK_DELTA_AVAILABLE_SOLO_PREMIUM_ROOM_COUNT),
    availableDuoRoomCount: parseInt(import.meta.env.ERK_DELTA_AVAILABLE_DUO_ROOM_COUNT),
};

export const alphaBlock : IBlock = {
    id: 'residence-alpha',
    name: 'Résidence Alpha',

    totalFloor:  parseInt(import.meta.env.ERK_ALPHA_TOTAL_FLOOR),
    totalRoom: parseInt(import.meta.env.ERK_ALPHA_TOTAL_ROOM),

    bReady: parseInt(import.meta.env.ERK_ALPHA_B_READY) != 0,
    scheduledDate: import.meta.env.ERK_ALPHA_SCHEDULED_DATE,
    
    totalSoloConfortRoom: parseInt(import.meta.env.ERK_ALPHA_TOTAL_SOLO_CONFORT_ROOM),
    totalSoloPremiumRoom: parseInt(import.meta.env.ERK_ALPHA_TOTAL_SOLO_PREMIUM_ROOM),
    totalDuoRoom: parseInt(import.meta.env.ERK_ALPHA_TOTAL_DUO_ROOM),
    availableRoomCount: parseInt(import.meta.env.ERK_ALPHA_AVAILABLE_ROOM_COUNT),
    availableSoloConfortRoomCount: parseInt(import.meta.env.ERK_ALPHA_AVAILABLE_SOLO_CONFORT_ROOM_COUNT),
    availableSoloPremiumRoomCount: parseInt(import.meta.env.ERK_ALPHA_AVAILABLE_SOLO_PREMIUM_ROOM_COUNT),
    availableDuoRoomCount: parseInt(import.meta.env.ERK_ALPHA_AVAILABLE_DUO_ROOM_COUNT),
};

export const zetaBlock : IBlock = {
    id: 'residence-zeta',
    name: 'Résidence Zeta',

    totalFloor:  parseInt(import.meta.env.ERK_ZETA_TOTAL_FLOOR),
    totalRoom: parseInt(import.meta.env.ERK_ZETA_TOTAL_ROOM),

    bReady: parseInt(import.meta.env.ERK_ZETA_B_READY) != 0,
    scheduledDate: import.meta.env.ERK_ZETA_SCHEDULED_DATE,
    
    totalSoloConfortRoom: parseInt(import.meta.env.ERK_ZETA_TOTAL_SOLO_CONFORT_ROOM),
    totalSoloPremiumRoom: parseInt(import.meta.env.ERK_ZETA_TOTAL_SOLO_PREMIUM_ROOM),
    totalDuoRoom: parseInt(import.meta.env.ERK_ZETA_TOTAL_DUO_ROOM),
    availableRoomCount: parseInt(import.meta.env.ERK_ZETA_AVAILABLE_ROOM_COUNT),
    availableSoloConfortRoomCount: parseInt(import.meta.env.ERK_ZETA_AVAILABLE_SOLO_CONFORT_ROOM_COUNT),
    availableSoloPremiumRoomCount: parseInt(import.meta.env.ERK_ZETA_AVAILABLE_SOLO_PREMIUM_ROOM_COUNT),
    availableDuoRoomCount: parseInt(import.meta.env.ERK_ZETA_AVAILABLE_DUO_ROOM_COUNT),
};

export const phiBlock : IBlock = {
    id: 'residence-phi',
    name: 'Résidence Phi',

    totalFloor:  parseInt(import.meta.env.ERK_PHI_TOTAL_FLOOR),
    totalRoom: parseInt(import.meta.env.ERK_PHI_TOTAL_ROOM),

    bReady: parseInt(import.meta.env.ERK_PHI_B_READY) != 0,
    scheduledDate: import.meta.env.ERK_PHI_SCHEDULED_DATE,
    
    totalSoloConfortRoom: parseInt(import.meta.env.ERK_PHI_TOTAL_SOLO_CONFORT_ROOM),
    totalSoloPremiumRoom: parseInt(import.meta.env.ERK_PHI_TOTAL_SOLO_PREMIUM_ROOM),
    totalDuoRoom: parseInt(import.meta.env.ERK_PHI_TOTAL_DUO_ROOM),
    availableRoomCount: parseInt(import.meta.env.ERK_PHI_AVAILABLE_ROOM_COUNT),
    availableSoloConfortRoomCount: parseInt(import.meta.env.ERK_PHI_AVAILABLE_SOLO_CONFORT_ROOM_COUNT),
    availableSoloPremiumRoomCount: parseInt(import.meta.env.ERK_PHI_AVAILABLE_SOLO_PREMIUM_ROOM_COUNT),
    availableDuoRoomCount: parseInt(import.meta.env.ERK_PHI_AVAILABLE_DUO_ROOM_COUNT),
};

export const kappaBlock : IBlock = {
    id: 'residence-kappa',
    name: 'Résidence Kappa',

    totalFloor:  parseInt(import.meta.env.ERK_KAPPA_TOTAL_FLOOR),
    totalRoom: parseInt(import.meta.env.ERK_KAPPA_TOTAL_ROOM),

    bReady: parseInt(import.meta.env.ERK_KAPPA_B_READY) != 0,
    scheduledDate: import.meta.env.ERK_KAPPA_SCHEDULED_DATE,
    
    totalSoloConfortRoom: parseInt(import.meta.env.ERK_KAPPA_TOTAL_SOLO_CONFORT_ROOM),
    totalSoloPremiumRoom: parseInt(import.meta.env.ERK_KAPPA_TOTAL_SOLO_PREMIUM_ROOM),
    totalDuoRoom: parseInt(import.meta.env.ERK_KAPPA_TOTAL_DUO_ROOM),
    availableRoomCount: parseInt(import.meta.env.ERK_KAPPA_AVAILABLE_ROOM_COUNT),
    availableSoloConfortRoomCount: parseInt(import.meta.env.ERK_KAPPA_AVAILABLE_SOLO_CONFORT_ROOM_COUNT),
    availableSoloPremiumRoomCount: parseInt(import.meta.env.ERK_KAPPA_AVAILABLE_SOLO_PREMIUM_ROOM_COUNT),
    availableDuoRoomCount: parseInt(import.meta.env.ERK_KAPPA_AVAILABLE_DUO_ROOM_COUNT),
};

export const thetaBlock : IBlock = {
    id: 'residence-theta',
    name: 'Résidence Theta',

    totalFloor:  parseInt(import.meta.env.ERK_THETA_TOTAL_FLOOR),
    totalRoom: parseInt(import.meta.env.ERK_THETA_TOTAL_ROOM),

    bReady: parseInt(import.meta.env.ERK_THETA_B_READY) != 0,
    scheduledDate: import.meta.env.ERK_THETA_SCHEDULED_DATE,
    
    totalSoloConfortRoom: parseInt(import.meta.env.ERK_THETA_TOTAL_SOLO_CONFORT_ROOM),
    totalSoloPremiumRoom: parseInt(import.meta.env.ERK_THETA_TOTAL_SOLO_PREMIUM_ROOM),
    totalDuoRoom: parseInt(import.meta.env.ERK_THETA_TOTAL_DUO_ROOM),
    availableRoomCount: parseInt(import.meta.env.ERK_THETA_AVAILABLE_ROOM_COUNT),
    availableSoloConfortRoomCount: parseInt(import.meta.env.ERK_THETA_AVAILABLE_SOLO_CONFORT_ROOM_COUNT),
    availableSoloPremiumRoomCount: parseInt(import.meta.env.ERK_THETA_AVAILABLE_SOLO_PREMIUM_ROOM_COUNT),
    availableDuoRoomCount: parseInt(import.meta.env.ERK_THETA_AVAILABLE_DUO_ROOM_COUNT),
};

export const residenceData = {
    /* total number of residence */
    totalResidence: 9,
    
    //=== Block data
    allBlocks: [ 
        sigmaBlock, gammaBlock, deltaBlock, alphaBlock, 
                                            zetaBlock,
        thetaBlock, eurekaBlock, kappaBlock, phiBlock, 
    ],
};

export const ERK_FEATURE_FLAGS = {
    eurekashop : true,
    eurekanet : true,
    booking : true
};

const SITE_CONFIG = { ...contacts, links, ...residenceData };
export default SITE_CONFIG;