const TundraProfile = (props) => {
  return (
    <div>
    <h2>PROFILE</h2>
    <div>
      <p>
        SPI-FlexCom {">"} SpiConsole.connect<br></br>
        Verifying SPI-Rec identity credential keys. Do not disconnect.<br></br>
        Identify verified as Cpt. J. Winters.
      </p>
      <p>
        Initiating access...<br></br>
        Negotiating secure connection via SPI-qNet<br></br>
        Connection successful!
      </p>
      <p>
        Welcome Cpt. Jiang Winters
      </p>
      <p>
        Sec-SPI-Console {">"} cd halberd_sector/Aurora/errant_subjects/T47C-M1<br></br>
        Sec-SPI-Console {">"} ls -l<br></br>
        -rw-r--r--@ 6 aurora_admin staff 46456 KEA4-Jul 24 15:34 subject_profile<br></br>
        -rw-r--r--@ 17 aurora_admin staff 3275 KEA4-Jul 26 06:50 history<br></br>
        -rw-r--r--@ 17 aurora_admin staff 490632 KEA4-Mar 02 02:11 boost<br></br>
        -rw-r--r--@ 30 aurora_admin staff 1196 KEA4-Aug 04 16:17 current_status
      </p>
      {props.notice}
    </div>
  </div>
  )
}

const TundraHistory = (props) => {
  return (
    <div>
    <h2>HISTORY</h2>
      <div>
        <p>
          Not much is known about T47C prior to his time in the Aurora project.<br/>
          Prior to entering the program, T47C was a miner on Kearsarge IV. <br/>
          An incident in the active Tyrium mine left T47C unable to survive <br/>
          without intervention from the program. Details of this event are <br/>
          either highly classified or unknown.
        </p>
        {props.notice}
      </div>
    </div>
  )

}

const TundraBoost = (props) => {
  return (
    <div>
    <h2>BOOST</h2>
      <div>
        <p>
          SPI-FlexCom Database [Version 121.147.3B]<br/>
          (c) 2376 Seyfert Prototype Interplanetary
        </p>
        <p>
          Tyrium, first discovered on Kearsarge IV, is a highly caustic and dangerous<br/>
          compound. It is found on only a few asteroids and comets around KEA4,<br/>
          however current theories by SPI point to an origination point outside<br/>
          the Kearsarge system.
        </p>
        <p>
          Physically, raw Tyrium can be found in either an ore or viscous state.<br/>
          It can be easily identified by its bright cobalt glow. Viscous Tyrium <br/>
          tends to attract other molecules of the substance in a local area.<br/>
          Research is still ongoing on this mechanism.
        </p>
        <p>
          In its unprocessed form, Tyrium emits ionizing radiation. For most, <br/>
          two weeks of exposure to moderate amounts of Tyrium can cause madness <br/>
          or radiation sickness. Individuals with advanced Tyrium poisoning have <br/>
          been observed seeking out greater and greater concentrations of the substance. <br/>
          exposure within three weeks. Recovery from extended exposure<br/>
          is possible, but unlikely.
        </p>
          When processed, Tyrium does not emit any ionizing radiation. <br/>
          When ingested or injected, processed Tyrium can induce increases in strength,<br/>
          stamina, aggression, sexual drive. In some subjects Tyrium-P can cause <br/>
          increases in muscle mass and height. Extremely dilute quantities are <br/>
          currently undergoing clinical trials as a erectile dysfunction drug.
        <p>
          SPI runs a special recovery program for survivors of extreme Tyrium exposure.
        </p>
        {props.notice}
      </div>
    </div>
  )
}

const TundraCurrentStatus = (props) => {
  return (
    <div>
    <h2>CURRENT_STATUS</h2>
      <div>
        <p>
          The official story to investors, customers, and interested nation-states:
        </p>
        <p>
          An industrial accident destroyed AURORA-1. All personel, experiments, <br/>
          and subjects were lost. The Tyrium crater on KEA4 was not damaged in <br/>
          the incident. Data from past and active experiments are currently <br/>
          being processed by AURORA-2. Mining of raw Tyrium continues. Processing <br/>
          of Tyrium-P is in initial stages of start-up at AURORA-2. Our most <br/>
          promising subject, T47C was killed in the explosion.
        </p>
        <p>
          Unofficially, the story is much worse:
        </p>
        <p>
          Emergency reports from the facility indicate T47C outgrew our ability <br/>
          to control him. It seems our personel were uanble to control their baser <br/>
          instincts, leading to the subject's abilities and strengths outpacing <br/>
          even our most advanced security equipment and techniques. Once he gained <br/>
          access to the raw Tyrium storage, it was over. He consumed every last drop <br/>
          of Tyrium on site--draining even our other subjects--before destroying <br/>
          the facility and escaping. Rumors indicate he had help from the inside, <br/>
          perhaps from an obsessed and mentally ill technician. Current theories <br/>
          point to industrial espionage by a competitor or nation state. 
        </p>
        <p>
          T47C's whereabouts are currently unknown, however recover operations are underway.
        </p>
        {props.notice}
      </div>
    </div>
  )
}

const Title = () => {
  return (
    <div>
      <h2>Title</h2>
    </div>
  )
}

export {
  TundraProfile,
  TundraHistory,
  TundraBoost,
  TundraCurrentStatus,
  Title
}