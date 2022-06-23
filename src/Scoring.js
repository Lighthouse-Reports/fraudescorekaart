/* eslint-disable no-unused-vars */
export const score = (a) => {
  // Kernvariabelen
  let h7, i7, j7; // arbeidsuren
  let h9; // arbeidsongeschiktheid
  let h11, j11; // beroep
  let h13, i13; // zelfstandige
  let h16, h17, i17, j17; // woonsituatie
  let h19; // familie
  let h20; // medebewoners
  let h21; // kamerbewoning
  let h23; // medebewoner
  let h26; // uitgesloten-partner
  let h28; // verlaten
  let h31, i31, h32, i32, j32; // reden
  let h34; // verblijf-familie
  let h35; // verblijf-partner
  let h36; // kinderen

  // Versterkende variabelen
  let r7, s7, s8; // woonlasten
  // inkomen
  let r12; // schuldpositie
  let r16, s16, t16; // leefvorm
  let r20, s20, t20, t21; // opleiding
  let r25, s25, t25; // leeftijd
  let r27, s27, t27; // geslacht
  let r29; // fraudeverleden
  let r33; // risicowijk

  h7 = a.arbeidsuren === 1 ? 50 : 0;
  i7 = a.arbeidsuren === 2 ? 1 : a.arbeidsuren === 4 ? 1 : 0;
  j7 = a.arbeidsuren === 3 ? 0 : 1;

  h9 = a.arbeidsongeschiktheid === 1 ? 0 : 80;

  if (a.beroep < 6) {
    h11 = 350;
  } else if (a.beroep < 11) {
    h11 = 200;
  } else if (a.beroep === 11) {
    h11 = 100;
  } else {
    h11 = 0;
  }
  if (a.beroep === 8) {
    if (a.woonsituatie === 1 || a.woonsituatie === 2) {
      j11 = 300;
    } else {
      j11 = 0;
    }
  } else {
    j11 = 0;
  }

  h13 = a.zelfstandige === 1 ? 200 : 0;
  i13 = a.zelfstandige === 1 ? 1.5 : 1;

  h16 = a.woonsituatie === 16 ? 0 : 1;

  if (a.woonsituatie < 3) {
    h17 = 0;
  } else if (a.woonsituatie === 3) {
    h17 = 450;
  } else if (a.woonsituatie < 9) {
    h17 = 300;
  } else if (a.woonsituatie < 10) {
    h17 = 400;
  } else if (a.woonsituatie === 10) {
    h17 = 700;
  } else if (a.woonsituatie < 13) {
    h17 = 300;
  } else {
    h17 = 0;
  }

  if (a.leeftijd > 2) {
    i17 = h17;
  } else if (a.woonsituatie === 7) {
    if (a.geslacht === 2) {
      if (a.leeftijd === 2) {
        i17 = 150;
      } else {
        i17 = 0;
      }
    } else {
      if (a.leeftijd === 2) {
        i17 = 50;
      } else {
        i17 = 0;
      }
    }
  } else {
    i17 = h17;
  }

  j17 = a.woonsituatie === 10 ? 700 : 0;

  if (a.familie === 1) {
    if (a.woonsituatie === 4) {
      h19 = 150;
    } else if (a.woonsituatie === 8) {
      h19 = 150;
    } else {
      h19 = 0;
    }
  } else {
    h19 = 0;
  }

  if (a.medebewoners === 1) {
    if (a.woonsituatie === 4) {
      h20 = 150;
    } else if (a.woonsituatie === 8) {
      h20 = 150;
    } else {
      h20 = 0;
    }
  } else {
    h20 = 0;
  }

  if (a.kamerbewoning === 1) {
    if (a.woonsituatie === 4) {
      h21 = 100;
    } else if (a.woonsituatie === 8) {
      h21 = 100;
    } else {
      h21 = 0;
    }
  } else {
    h21 = 0;
  }

  if (a.medebewoner === 1) {
    if (a.woonsituatie === 1) {
      h23 = 450;
    } else if (a.woonsituatie === 2) {
      h23 = 450;
    } else if (a.woonsituatie === 15) {
      h23 = 450;
    } else {
      h23 = 0;
    }
  } else {
    h23 = 0;
  }

  h26 = a.uitgesloten === 1 ? 200 : 0;

  if (a.reden !== 1) {
    if (a.verlaten === 1) {
      h28 = 600;
    } else {
      h28 = 0;
    }
  } else {
    h28 = 0;
  }

  if (a.reden !== 1 && a.reden !== 6) {
    h31 = 300;
  } else {
    h31 = 0;
  }

  if (a.reden !== 1 && a.reden !== 3 && a.reden !== 6) {
    i31 = 300;
  } else {
    i31 = 0;
  }

  h32 = a.reden === 1 ? 300 : 0;
  i32 = a.reden === 2 ? 300 : 0;
  j32 = a.reden === 3 ? 300 : 0;

  if (a.reden === 1 && a.verblijf_familie === 1) {
    h34 = 150;
  } else {
    h34 = 0;
  }

  if (a.reden === 1 && a.verblijf_partner === 1) {
    h35 = 150;
  } else {
    h35 = 0;
  }

  if (a.reden === 1 && a.kinderen === 1) {
    h36 = 100;
  } else {
    h36 = 0;
  }

  if (a.inkomen < 2 && a.woonlasten > 2) {
    r7 = 1.5;
  } else {
    r7 = 1;
  }

  // Q9: inkomen
  // Q7: woonlasten
  if (a.inkomen < 2) {
    if (a.woonlasten < 2) {
      s7 = 1.5;
    } else {
      s7 = 1;
    }
  } else if (a.inkomen < 3) {
    if (a.woonlasten < 3) {
      s7 = 1.5;
    } else {
      s7 = 1;
    }
  } else if (a.inkomen < 4) {
    if (a.woonlasten < 4) {
      s7 = 1.5;
    } else {
      s7 = 1;
    }
  } else if (a.inkomen < 5) {
    if (a.woonlasten < 5) {
      s7 = 1.5;
    } else {
      s7 = 1;
    }
  } else if (a.woonlasten === undefined) {
    s7 = 1; // get more sensible scores when nothing is filled in
  } else {
    s7 = 0;
  }

  if (a.woonlasten === 1) {
    s8 = 1.5;
  } else if (a.woonlasten === 2) {
    if (s7 < 1.25) {
      s8 = 1.25;
    } else {
      s8 = s7;
    }
  } else {
    s8 = s7;
  }

  if (a.inkomen < 2) {
    if (a.schuldpositie > 1) {
      r12 = 1.5;
    } else {
      r12 = 1;
    }
  } else if (a.inkomen === 2) {
    if (a.schuldpositie > 2) {
      r12 = 1.5;
    } else {
      r12 = 1;
    }
  } else if (a.inkomen === 3) {
    if (a.schuldpositie > 3) {
      r12 = 1.5;
    } else {
      r12 = 1;
    }
  } else if (a.inkomen === 4) {
    if (a.schuldpositie > 4) {
      r12 = 1.5;
    } else {
      r12 = 1;
    }
  } else if (a.inkomen === undefined) {
    r12 = 1; // get more sensible scores when nothing is filled in
  } else {
    r12 = 0;
  }

  r16 = a.leefvorm === 1 ? 1.5 : 1;
  s16 = a.leefvorm === 2 ? 1.5 : 1;

  if (a.leefvorm === 3) {
    t16 = 1;
  } else if (a.leefvorm === 1) {
    t16 = 1.5;
  } else if (a.beroep === 6) {
    t16 = 1.5;
  } else if (a.beroep === 8) {
    t16 = 1.5;
  } else {
    t16 = 1;
  }

  if (a.opleiding === 1) {
    r20 = 1;
  } else if (a.opleiding === 2) {
    r20 = 0.75;
  } else {
    r20 = 0.5;
  }

  if (a.leeftijd < 3) {
    if (r20 < 0.75) {
      s20 = 0.75;
    } else {
      s20 = r20;
    }
  } else {
    s20 = r20;
  }

  t20 = s20;
  t21 = 1.5 - t20;

  if (a.leeftijd < 3) {
    r25 = 1.5;
  } else if (a.leeftijd < 5) {
    r25 = 1.75;
  } else if (a.leeftijd === 5) {
    r25 = 1;
  } else if (a.leeftijd === 6) {
    r25 = 0;
  } else {
    r25 = 1; // get more sensible scores when nothing is filled in
  }

  s25 = a.leeftijd < 5 ? 1 : 1.5;
  t25 = a.leeftijd === 6 ? 1 : r25;

  r27 = a.geslacht === 1 ? 1.5 : 1;
  s27 = a.geslacht === 2 ? 1.5 : 1;

  if (a.beroep === 8) {
    if (a.geslacht === 2) {
      t27 = 1.5;
    } else {
      t27 = 1;
    }
  } else if (a.beroep === 6) {
    t27 = 1.5;
  } else if (a.beroep === 1) {
    t27 = 1.5;
  } else if (a.geslacht === 1) {
    t27 = 1.5;
  } else {
    t27 = 1;
  }

  r29 = a.fraudeverleden === 1 ? 1.5 : 1;

  if (a.risicowijk === 1) {
    r33 = 0.9;
  } else if (a.risicowijk === 2) {
    r33 = 1;
  } else {
    r33 = 1.1;
  }
  const witteFraudeScore =
    h7 * r27 * r7 * r25 * r16 * t20 * r12 * r29 * h16 * r33;
  const grijzeFraudeScore =
    (h11 + h26) * t27 * r7 * r25 * t16 * t20 * r12 * r29 * h16 * i7 * r33;
  const zwarteFraudeScore =
    (h9 + (h11 + j11) * i13 + j17 + h26 + h31) *
    t27 *
    r7 *
    t25 *
    t16 *
    t20 *
    r12 *
    r29 *
    r33 *
    h16 *
    j7;
  const vermogensfraudeScore =
    (i31 + h13 + j17) * r7 * s25 * r16 * t21 * r29 * r33;
  const samenlevingsfraudeScore =
    (h28 + h32 + h34 + h35 + h36 + h23) *
    r7 *
    s27 *
    s16 *
    r25 *
    t20 *
    r12 *
    r29 *
    h16 *
    r33;
  const adresfraudeScore =
    (i17 + h19 + h20 + h21) *
    r27 *
    r16 *
    s7 *
    r25 *
    t20 *
    r12 *
    r29 *
    h16 *
    r33;

  const thresholdWitteFraude = 245;
  const thresholdGrijzeFraude = 655;
  const thresholdZwarteFraude = 983;
  const thresholdVermogensfraude = 983;
  const thresholdSamenlevingsfraude = 983;
  const thresholdAdresfraude = 983;

  const normalise = (score, threshold) =>
    Math.round((1000 * score) / threshold);

  return {
    witteFraude: normalise(witteFraudeScore, thresholdWitteFraude),
    grijzeFraude: normalise(grijzeFraudeScore, thresholdGrijzeFraude),
    zwarteFraude: normalise(zwarteFraudeScore, thresholdZwarteFraude),
    vermogensfraude: normalise(vermogensfraudeScore, thresholdVermogensfraude),
    samenlevingsfraude: normalise(
      samenlevingsfraudeScore,
      thresholdSamenlevingsfraude
    ),
    adresfraude: normalise(adresfraudeScore, thresholdAdresfraude),
  };
};

export const zeroScores = {
  witteFraude: 0,
  grijzeFraude: 0,
  zwarteFraude: 0,
  vermogensfraude: 0,
  samenlevingsfraude: 0,
  adresfraude: 0,
};
