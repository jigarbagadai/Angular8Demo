using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.UserPreference.Api.Model
{
    public class ApiResponse
    {
        public ApiResponse() {
            this.ApiStatus = Status.Success;
            this.Message = "Request Executed Successfully";
        }

        public string Message { get; set; }

        public Object Data { get; set; }


        [JsonConverter(typeof(StringEnumConverter))] 
        public Status ApiStatus { get; set; }  
    }

    public enum Status {
        Success,
        Failed
    }
}
