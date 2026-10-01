/* =====================================================================
   data.js — edit this file to update the site.
   - NEWS: newest first. `date` is free text shown as-is.
   - PUBS: newest first. Fields:
       id        short key, also the thumbnail filename: assets/pubs/<id>.png
       title
       authors   array of names. Use "Name*" for equal contribution.
                 The name matching ME below is highlighted automatically.
       venue     short venue name shown on the badge (e.g. "NeurIPS")
       venueFull full venue string shown under the title
       year
       note      optional small text (e.g. "with Google Cloud AI")
       links     { paper, code, project, video, poster, slides, supp } — any subset
   ===================================================================== */

const ME = "Jeehye Na";

const NEWS = [
  { date: "Sep 2026", text: "<b>AgentGrad</b> (intervention-guided prompt optimization for multi-agent systems) is accepted to <b>NeurIPS 2026</b>." },
  { date: "Jul 2026", text: "<b>Context Blindness in DPO</b> (context-calibrated preference optimization for MLLMs) is accepted to <b>ECCV 2026</b>." },
  { date: "Nov 2025", text: "<b>CoLLaMo</b> (relation-aware multimodal collaboration for molecular LLMs) is accepted to <b>AAAI 2026</b>." },
  { date: "Oct 2025", text: "<b>RMCD</b> (relevance-aware multi-context contrastive decoding for retrieval-augmented VQA) is accepted to <b>WACV 2026</b>." },
  { date: "Sep 2025", text: "<b>DeepVideo-R1</b> (video reinforcement fine-tuning with Reg-GRPO) is accepted to <b>NeurIPS 2025</b>." },
  { date: "Mar 2025", text: "Started my M.S. at <b>KAIST</b>, MLV Lab (advisor: Prof. Hyunwoo J. Kim)." },
  { date: "Feb 2025", text: "Graduated from <b>Korea University</b> with a B.S. in Biomedical Engineering." },
  { date: "Dec 2024", text: "<b>VidChain</b> (chain-of-tasks with metric-based DPO for dense video captioning) is accepted to <b>AAAI 2025</b>." },
];

const PUBS = [
  {
    id: "skill-optimization",
    title: "Retrieval-Augmented Skill Optimization via Cross-Harness Adaptation",
    authors: ["Jaewon Chu", "Ji Soo Lee", "Jihwan Park", "Dohwan Ko", "Jeehye Na", "Seunghun Lee", "Taehoon Lee", "Minseo Yoon", "Minseok Joo", "Yunyang Xiong", "Hyunwoo J. Kim"],
    venue: "Preprint",
    venueFull: "arXiv preprint, 2026 (under review)",
    year: 2026,
    note: "with Meta AI",
    links: {
      paper: "https://arxiv.org/abs/2609.38024"
    }
  },
  {
    id: "agentgrad",
    title: "AgentGrad: Intervention-guided Prompt Optimization for Multi Agent Systems",
    authors: ["Jaewon Chu", "Jinwoo Seo", "Jaewon Cho", "Jeehye Na", "Yunyang Xiong", "Youngdae Kim", "Hyunwoo J. Kim"],
    venue: "NeurIPS",
    venueFull: "Advances in Neural Information Processing Systems (NeurIPS), 2026",
    year: 2026,
    note: "with Meta and UNIST",
    links: {
      paper: "https://arxiv.org/abs/2609.08572"
    }
  },
  {
    id: "context-blindness",
    title: "Context Blindness in DPO: Mitigating Object Hallucination in MLLMs via Context-Calibrated Preference Optimization",
    authors: ["Byungoh Ko", "Jinyoung Park", "Jongha Kim", "Jeehye Na", "Jaewon Cho", "Hyunwoo J. Kim"],
    venue: "ECCV",
    venueFull: "European Conference on Computer Vision (ECCV), 2026",
    year: 2026,
    links: {
      paper: "https://arxiv.org/abs/2608.12158"
    }
  },
  {
    id: "collamo",
    title: "Improving Large Molecular Language Model via Relation-aware Multimodal Collaboration",
    authors: ["Jinyoung Park", "Minseong Bae", "Jeehye Na", "Hyunwoo J. Kim"],
    venue: "AAAI",
    venueFull: "AAAI Conference on Artificial Intelligence (AAAI), 2026",
    year: 2026,
    links: {
      paper: "https://arxiv.org/abs/2601.12256",
      code: "https://github.com/mlvlab/CoLLaMo",
      video: "https://youtu.be/7pI2k2snjVY",
      poster: "https://drive.google.com/file/d/16muYd_K2LRfyLCewV4O0R68JTSbQsRKL/view?usp=sharing",
      slides: "https://docs.google.com/presentation/d/16MtpCi858BIJLL0Kgn7gYhbrvy5Sdn71/edit?usp=sharing"
    }
  },
  {
    id: "rmcd",
    title: "Relevance-aware Multi-context Contrastive Decoding for Retrieval-augmented Visual Question Answering",
    authors: ["Jongha Kim", "Byungoh Ko", "Jeehye Na", "Jinsung Yoon", "Hyunwoo J. Kim"],
    venue: "WACV",
    venueFull: "IEEE/CVF Winter Conference on Applications of Computer Vision (WACV), 2026",
    year: 2026,
    note: "with Google Cloud AI",
    links: {
      paper: "https://arxiv.org/abs/2602.06050",
      code: "https://github.com/mlvlab/RMCD",
      video: "https://youtu.be/TqSr6Ve5zds",
      poster: "https://drive.google.com/file/d/1BkYW9B3BOk8ipUZAdb2B67-znAKCHfLa/view?usp=sharing",
      slides: "https://docs.google.com/presentation/d/1qPm3vmiFwym4NVDGGeyY_6SPjt17sE-U/edit?usp=sharing"
    }
  },
  {
    id: "deepvideo-r1",
    title: "DeepVideo-R1: Video Reinforcement Fine-Tuning via Difficulty-aware Regressive GRPO",
    authors: ["Jinyoung Park", "Jeehye Na", "Jinyoung Kim", "Hyunwoo J. Kim"],
    venue: "NeurIPS",
    venueFull: "Advances in Neural Information Processing Systems (NeurIPS), 2025",
    year: 2025,
    links: {
      paper: "https://arxiv.org/abs/2506.07464",
      code: "https://github.com/mlvlab/DeepVideoR1",
      video: "https://youtu.be/UdoqgeswE24",
      poster: "https://drive.google.com/file/d/1wtczaKnCh0p8_fd5FjdfvI51bHlBX6sz/view?usp=sharing",
      slides: "https://docs.google.com/presentation/d/1N-V94JI2FtdMMy6PYBQMGDg51FbWlc9m/edit?usp=sharing"
    }
  },
  {
    id: "vidchain",
    title: "VidChain: Chain-of-Tasks with Metric-based Direct Preference Optimization for Dense Video Captioning",
    authors: ["Ji Soo Lee*", "Jongha Kim*", "Jeehye Na", "Jinyoung Park", "Hyunwoo J. Kim"],
    venue: "AAAI",
    venueFull: "AAAI Conference on Artificial Intelligence (AAAI), 2025",
    year: 2025,
    links: {
      paper: "https://arxiv.org/abs/2501.06761",
      code: "https://github.com/mlvlab/VidChain",
      video: "https://youtu.be/qM-aRR2djGM",
      poster: "https://drive.google.com/file/d/1lTCVPz2JAnsp3Eb_tXt7acNJ7YmKvDiE/view?usp=sharing",
      slides: "https://drive.google.com/file/d/11ppWGcxRGHlht2PXcgZ4RNXaKNxsRKmr/view?usp=sharing"
    }
  }
];
