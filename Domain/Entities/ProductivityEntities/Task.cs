﻿using System;
using System.Collections.Generic;

namespace Domain.Entities.ProductivityEntities
{
    public class Task
    {
        public int Id { get; set; }
        public string Title { get; set; }   
        public string Description { get; set; }
        public string Priority { get; set; }
        public DateTime Created { get; set; }
        public bool IsCompleted { get; set; }
        public int CategoryId { get; set; }
        public Category Category { get; set; }
    }
}
